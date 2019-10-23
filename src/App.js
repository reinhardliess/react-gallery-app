/******************************************
Treehouse Techdegree:
FSJS project 7 - A React Gallery App
Reinhard Liess, 2019
******************************************/

import './App.css'
import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import axios from 'axios'
import flickrApiKey from './Config'
import { getRandomInt } from './utils'

// Components
import Gallery from './Components/Gallery'
import Header from './Components/Header'
import NotFound from './Components/NotFound'
import Error from './Components/Error'
import Loading from './Components/Loading'

const defaultTags = [
  {
    name: 'Lakes',
    isLoading: true
  },
  {
    name: 'Mountains',
    isLoading: true
  },
  {
    name: 'Trees',
    isLoading: true
  }
]

/** The component handling the app */
export default class App extends Component {

  state = {
    lakes: [],
    mountains: [],
    trees: [],
    search: [],
    isLoading: false,
    error: null,
  }

  componentDidMount() {

    // perform search if the user inputs a search url
    const searchQuery = window.location.pathname.match(/^\/search\/(.+)$/)
    if (searchQuery) {
      this.performSearch(decodeURIComponent(searchQuery[1]))
    }

    // preload all data for the three default tags, fetch data from flickr using axios
    this.setState({ isLoading: true })
    defaultTags.forEach(element => {
      axios.get('https://www.flickr.com/services/rest/', {
        params: this.buildQuery(element.name)
      })
        .then(responseData => {
          this.setState({
            [element.name.toLowerCase()]: responseData.data.photos,
          })
          element.isLoading = false
          if (defaultTags.every(tag => !tag.isLoading)) {
            this.setState({ isLoading: false })
          }
        })
        .catch(error => {
          console.error(error);
          this.setState({ error, isLoading: false })
        })
    })

  }

  /**
   * Builds api options for axios
   * @param {string} query - photos to search for
   * @returns {object} options - flickr api object for axios
   */
  buildQuery = (query) => {

    return ({
      method: 'flickr.photos.search',
      api_key: flickrApiKey,
      content_type: 1,
      extras: 'description',
      per_page: 24,
      page: 1,
      sort: 'relevance',
      tags: query,
      format: 'json',
      nojsoncallback: 1
    })
  }

  /**
   * accesses flickr API to perform search
   * @param {string} query
   */
  performSearch = (query) => {

    this.setState({ isLoading: true })
    axios.get('https://www.flickr.com/services/rest/', {
      params: this.buildQuery(query)
    })
      .then(responseData => {
        this.setState({
          search: responseData.data.photos,
          isLoading: false
        })
      })
      .catch(error => {
        console.error(error);
        this.setState({ error, isLoading: false })
      })
  }

  render() {

    const { error, isLoading, lakes, mountains, trees, search } = this.state

    let statusComponent = null
    if (error) {
      statusComponent = <Error error={error} />
    } else if (isLoading) {
      statusComponent = <Loading />
    }

    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact
              path="/"
              render={() => <Redirect
                to={`/${defaultTags[getRandomInt(0, defaultTags.length - 1)].name}`} />}
            />
            <Route path="/lakes"
              render={() =>
                <Fragment>
                  <Header onSearch={this.performSearch} />
                  <Gallery
                    results={lakes}
                    title="Lakes"
                  />
                </Fragment>
              }
            />

            <Route path="/mountains"
              render={() =>
                <Fragment>
                  <Header onSearch={this.performSearch} />
                  <Gallery
                    results={mountains}
                    title="Mountains"
                  />
                </Fragment>
              }
            />

            <Route path="/trees"
              render={() =>
                <Fragment>
                  <Header onSearch={this.performSearch} />
                  <Gallery
                    results={trees}
                    title="Trees"
                  />
                </Fragment>
              }
            />

            <Route
              path="/search/:query"
              render={({ match }) =>
                <Fragment>
                  <Header onSearch={this.performSearch} />
                  <Gallery
                    results={search}
                    title={match.params.query}
                  />
                </Fragment>

              }
            />
            <Route component={NotFound} />
          </Switch>
          {statusComponent}
        </div>
      </BrowserRouter>
    )
  }
}





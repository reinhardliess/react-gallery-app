/******************************************
Treehouse Techdegree:
FSJS project 7 - A React Gallery App
Reinhard Liess, 2019
******************************************/

import './App.css'
import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import flickrApiKey from './Config'
import axios from 'axios'
import { getRandomInt } from './utils'

// Components
import Gallery from './Components/Gallery'
import Header from './Components/Header'
import NotFound from './Components/NotFound'
import Error from './Components/Error'
import Loading from './Components/Loading'

const DEFAULT_TAGS = ['Lakes', 'Mountains', 'Trees']

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
    const searchQuery = window.location.pathname.match(/\/search\/(.+)$/)
    if (searchQuery) {
      this.performSearch(decodeURIComponent(searchQuery[1]))
    }

    // preload all data for the three default tags, fetch data from flickr using axios
    this.setState({ isLoading: true })
    DEFAULT_TAGS.forEach(element => {
      axios.get('https://www.flickr.com/services/rest/', {
        params: this.buildQuery(element)
      })
        .then(responseData => {
          this.setState({
            [element.toLowerCase()]: responseData.data.photos,
            isLoading: false
          })
        })
        .catch(error => {
          console.error(error);
          this.setState({ error, isLoading: false })
        })
    })

  }

  /**
   * Builds api options for axios
   * @param {string} query
   * @returns {object} api-options
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
    // axios query here
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

    const { error, isLoading } = this.state

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
                to={`/${DEFAULT_TAGS[getRandomInt(0, DEFAULT_TAGS.length - 1)]}`} />}
            />
            <Route path="/lakes"
              render={() =>
                <Fragment>
                  <Header onSearch={this.performSearch} />
                  <Gallery
                    results={this.state.lakes}
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
                    results={this.state.mountains}
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
                    results={this.state.trees}
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
                    results={this.state.search}
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





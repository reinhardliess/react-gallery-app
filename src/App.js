/******************************************
Treehouse Techdegree:
FSJS project 7 - A React Gallery App
Reinhard Liess, 2019
******************************************/

import React, { Component, Fragment } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import flickrApiKey from './Config'
import axios from 'axios'
import { getRandomInt } from './utils'

// Components
import Gallery from './Components/Gallery'
import Header from './Components/Header'
import NotFound from './Components/NotFound'

export default class App extends Component {

  state = {
    defaultTags: ['Lakes', 'Mountains', 'Trees'],
    lakes: [],
    mountains: [],
    trees: [],
    search: [],
    isLoading: false,
    isError: false
  }

  componentDidMount() {

    // preload all data for the three default tags, fetch data from flickr using axios
    this.state.defaultTags.forEach(element => {
      axios.get('https://www.flickr.com/services/rest/', {
        params: this.buildQuery(element)
      })
        .then(responseData => {
          console.log({ element }, responseData);
          this.setState({
            [element.toLowerCase()]: responseData.data.photos.photo
          })
        })
        .catch(error => {
          console.log(error);
        })
    })

  }

  /**
   * Builds api options for axios
   * @param {string} query
   * @returns {object} api options
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
   * @param {boolean} isTagSearch
   */
  performSearch = (query) => {

    // axios query here
    axios.get('https://www.flickr.com/services/rest/', {
      params: this.buildQuery(query)
    })
      .then(responseData => {
        this.setState({
          search: responseData.data.photos.photo
        })
      })
      .catch(error => {
        console.log(error);
      })

    // handle loading and error states
  }

  render() {


    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            {/* <Route exact
              path="/"
              render={() => <Redirect
                to={`/${this.state.defaultTags[getRandomInt(0, this.state.defaultTags.length - 1)]}`} />}
            /> */}
            <Route path="/lakes"
              render={() =>
                <Fragment>
                  <Header onSearch={this.performSearch} />
                  <Gallery
                    images={this.state.lakes}
                    title="Lakes"
                    isLoading={this.state.isLoading}
                  />
                </Fragment>
              }
            />

            {/* more attributes: images and componentToRender */}
            {/* <Route
              path="/search/:query"
              render={({ match }) =>
                <Search
                  search={this.performSearch}
                  query={match.params.query}

                />}
            /> */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}





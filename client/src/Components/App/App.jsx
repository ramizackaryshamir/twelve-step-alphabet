import React from 'react';
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'

import Layout from '../shared/Layout/Layout.jsx'

import Meetings from '../../screens/Meetings/Meetings.jsx'
import PostReview from '../../screens/PostReview/PostReview'

import './App.css';

function App() {
  return (
    <>
      <Layout>
        <Route exact path='/meetings' component={Meetings} />
        <Route exact path='/post-review' component={PostReview} />
      </Layout>
    </>
  )
}

export default App;
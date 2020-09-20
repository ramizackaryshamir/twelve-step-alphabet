import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'

//import Layout from '../../Components/shared/Layout/Layout.jsx'
import Meetings from '../../screens/Meetings/Meetings.jsx'
import PostReview from '../../screens/PostReview/PostReview'

import './App.css';

function App() {
  return (
    <>
      <Switch>
          <Route exact path="/meetings" component={Meetings} />
          <Route exact path="/post-review" component={PostReview} />
      </Switch>
    </>
  )
}

export default App;
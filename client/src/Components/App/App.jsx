import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'

//import Layout from '../../Components/shared/Layout/Layout.jsx'
import Meetings from '../../screens/Meetings/Meetings.jsx'
import MeetingDetail from '../../screens/MeetingDetail/MeetingDetail.jsx'
import PostReview from '../../screens/PostReview/PostReview'

function App() {
  return (
    <>
      <Switch>
        <Route
          exact path="/"
          component={Meetings} />
        <Route
          exact path='/meeting-detail'
          component={MeetingDetail} />
        <Route
          exact path="/post-review" component={PostReview} />
      </Switch>
    </>
  )
}

export default App;
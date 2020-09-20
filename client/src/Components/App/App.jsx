import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'

import Layout from '../../Components/shared/Layout/Layout.jsx'

import MeetingsContainer from '../../containers/MeetingsContainer/MeetingsContainer.jsx';

function App() {
  return (
    <>
      <Layout>
        <MeetingsContainer />
      </Layout>
    </>
  )
}

export default App;
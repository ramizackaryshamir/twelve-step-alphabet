import React from 'react';
//import ReactDOM from 'react-dom'
//import { Router } from 'react-router-dom'

import Layout from '../shared/Layout/Layout.jsx'

import  Meetings from '../../screens/Meetings/Meetings.jsx'

import './App.css';

function App() {
  return (
    <>
      <Layout>
        <Meetings />
      </Layout>
    </>
  )
}

export default App;
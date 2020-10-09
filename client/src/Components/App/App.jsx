import React from 'react';

import Layout from '../../Components/shared/Layout/Layout.jsx'
import MeetingsContainer from '../../containers/MeetingsContainer/MeetingsContainer.jsx';

const App = () => {
  return (
    <>
      <Layout>
        <MeetingsContainer />
      </Layout>
    </>
  )
}

export default App;
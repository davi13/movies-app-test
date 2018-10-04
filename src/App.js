import React, { Component } from 'react';
import Layout from './container/layout/Layout';
import Films from './component/films/Films';


class App extends Component {

  render() {
    return (
      <Layout>
        <Films />
      </Layout>
    );
  }
}

export default App;

import React, { Component } from 'react'; 
import { Switch, Route} from 'react-router-dom';

import Layout from '../../layouts/Layout';
import MasterCard from '../../layouts/card'

class HomePage extends Component {

    render() {
      console.log('HomePage props: ', this.props);
      return (
        <Layout>
          <MasterCard/>
          <Switch>
          <Route path="/" exact component = {HomePage} />
          {/* <Route path="/admin" exact component = {AdminPage} /> */}
        </Switch>
        </Layout>

      );
    }
  }
  
  export default HomePage;
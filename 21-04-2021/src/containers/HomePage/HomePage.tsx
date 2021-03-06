import React, { Component } from 'react'; 
import { Switch, Route} from 'react-router-dom';


import Layout from '../../layouts/Layout';
import MasterCard from '../../layouts/card'
import Inbox from '../../components/inbox/inbox'

class HomePage extends Component {
    list =[
      {text:'Inbox', path: '/home/inbox'},
      {text:'Starred', path: '/home/starred'}
    ];
    render() {
 
      return (
        <Layout list={this.list} defaultSelected= {0}>
          <MasterCard/>
          <Switch>
          <Route path="/" exact render= {()=> <h3>Welcome to home!</h3>} />
          <Route path="/home/inbox" exact render= {()=> <Inbox/>} />
          <Route path="/home/starred" exact render= {()=> <h3>Stared component!</h3>} />          
        </Switch>
        </Layout>

      );
    }
  }
  
  export default HomePage;
import React, { Component } from 'react'; 
import { Switch, Route} from 'react-router-dom';
import Users from '../../components/Users/Users';
import Layout from '../../layouts/Layout';



class AdminPage extends Component {
  list =[
    {text:'Users', path: '/admin/users'},
    {text:'Admin', path: '/admin/roles'}
  ];
    render() {
      return (
        <Layout list={this.list} defaultSelected={-1}>
            <Switch>
          
          <Route path="/admin/users" exact render= {()=> <Users/>} />
          <Route path="/admin/roles" exact render= {()=> <h3>Roles component!</h3>} />          
        </Switch>
        </Layout>
          
        
      );
    }
  }
  
  export default AdminPage;
import React, {Component} from 'react';
import MyTable from '../../UI/Table'
import axios from 'axios'

interface IProps{
  loading: boolean;
  data: any;
  error: any;

}
class Users extends  Component{
  state ={loading: true, data: null, error:null};
  render (){return <UsersView {...this.state}/> }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response=> {
        const users: any[] = response.data;
        const modUsers = users.map((user:any) => {
            return{User: user.name, email: user.email,city: user.city, phone: user.phone, company:user.company.name};
        });
        this.setState({loading: false, data: modUsers, error:null})
    })
    .catch(error => this.setState({loading: false, data: null, error:error}))
      
  }
}


class UsersView extends Component<IProps>{
  renderLoading(){
    const dataJSX = <h3>Loading....</h3>
    return dataJSX;
  }

  renderError(){
    const dataJSX = <h3>Sorry! An error occured</h3>
    return dataJSX;
  }

  renderSuccess(){
    const dataJSX = <MyTable rows={this.props.data}/>
    return dataJSX;
  }
  render(){
    if(this.props.loading){
      return this.renderLoading();
    }else if(this.props.data){
      return this.renderSuccess();
    }else{
      return this.renderError();
    }
  }
}

export default Users;
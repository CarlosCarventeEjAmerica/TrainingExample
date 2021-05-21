import { Component } from 'react';
import { connect } from 'react-redux';

import MyTable from '../../UI/Table';

// import axios from '../../axios';
import { getUsersAction} from '../../redux/actions/users';


interface IProps{
  loading: boolean;
  users: any;
  error: any;
  getUsersAction: any;
  counter: number;
}

class Users extends Component<IProps> {

  // state = {loading: true, data:null, error:null};

  searchKeyPressHandler = ( event: any) => {
    if (event.key === `Enter`){
      const option = event.target.value;
      this.props.getUsersAction( option );
    }
  }

  componentDidMount( ){
    this.props.getUsersAction( null );
  }

  render( ) { return <UsersView {...this.props} searchHandler={this.searchKeyPressHandler}/> }
}

interface IProps2{
  loading: boolean;
  users: any;
  error: any;
  searchHandler:any;
  counter: number;
}

class UsersView extends Component <IProps2> {

  renderLoading(){
    const dataJSX = <h3>Loading....</h3>
    return dataJSX;
  }

  renderError( ){
    const dataJSX = <h3>Sorry! Error ocurred...</h3>
    return dataJSX;
  }

  renderSucces( ){
    const dataJSX = (
    <>
      <h3>Counter Value : {this.props.counter}</h3>
      <MyTable rows={this.props.users} searchHandler={this.props.searchHandler} />
    </>
    )
    return dataJSX;
  }

  render( ) {
 
        if ( this.props.loading ){
          return this.renderLoading( );
        } else if ( this.props.users ){
          return this.renderSucces( );
        } else {
          return this.renderError();
        }
  }

}

const mapStateToProps = ( store: any) => ({
  loading: store.users.loading,
  users: store.users.data,
  error: store.users.error,
  counter: store.counterKey.counter 
});

export default connect(mapStateToProps, {getUsersAction})(Users);
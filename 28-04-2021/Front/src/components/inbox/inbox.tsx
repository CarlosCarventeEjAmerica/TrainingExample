import React, {Component} from 'react';
import MyPaper from '../../UI/Paper'
import axios from 'axios'
import { RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps{
}
interface IState{
  loading: boolean;
  data: {}[]| null;
  error: any;
}
class Inbox extends  Component<IProps>{
  state: IState ={loading: true, data: null, error:null};
  render (){return <InboxView {...this.state} {...this.props}/>
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response=> {
        this.setState({loading: false, data: response.data, error:null})
        })
      .catch(error=>this.setState({loading: false, data: null, error:error}))
  }
}
interface IProps2 extends RouteComponentProps{
  loading: boolean;
  data: {}[]| null;
  error: any;

}
class InboxView extends Component<IProps2>{
  mailSelectedHandler(id: string){
    console.log('Selected Email:', id)
    this.props.history.push({pathname:`home/inbox/${id}`,search:`UserId?`});
  }
  renderLoading(){
    const dataJSX = <h3>Loading....</h3>
    return dataJSX;
  }

  renderError(){
    const dataJSX = <h3>Sorry! An error occured</h3>
    return dataJSX;
  }

  renderSuccess(){
    const dataJSX = this.props.data?.map((item:any)=>{
      return <MyPaper key={item.id} title= {item.title} body={item.body} clicked = {() => this.mailSelectedHandler(item.id, item.userIf)}/>
    
    })
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

export default Inbox;
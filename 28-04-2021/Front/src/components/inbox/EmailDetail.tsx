import React, {Component} from 'react';
import MyPaper from '../../UI/Paper'
import axios from 'axios'
import MyCard from '../../UI/Card';
import { RouteComponentProps } from 'react-router';

interface MatchParams{
  id: string;
}
interface IProps extends RouteComponentProps<MatchParams>{


}
interface IState{
  loading: boolean;
  data: {title:string, body:string}| null;
  error: any;

}

class EmailDetails extends  Component<IProps>{
  state: IState ={loading: true, data: null, error:null};
  render (){return <EmailDetailsView {...this.state}{...this.props}/>
  }
  componentDidMount(){
      const id = 1;
    axios.get(`https://jsonplaceholder.typicode.com/posts/$(id)`)
      .then(response => {
        this.setState({loading: false, data: response.data, error:null})
        })
      .catch(error=>this.setState({loading: false, data: null, error:error}))
  }
}

interface IProps2 extends RouteComponentProps{
  loading: boolean;
  data: {title:string, body:string}| null;
  error: any;

}
class EmailDetailsView extends Component<IProps2>{
  backButtonSelectedHnadler(){
    this.props.history.goBack();
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
    const dataJSX = this.props.data.map((item:any)=>{
      return <MyCard title= {this.props.data?.title} body={this.props.data?.body}/>
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

export default EmailDetails;
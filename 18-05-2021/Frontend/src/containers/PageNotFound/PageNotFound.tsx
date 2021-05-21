import { Paper } from '@material-ui/core';
import React, { Component } from 'react'; 
import InboxIcon from '@material-ui/icons/MoveToInbox';


interface Props{
    title : string
}

class PageNotFound extends Component <Props>{

    render() {
      return (
        <Paper elevation={0}>
            <InboxIcon/>
            <h2>{this.props.title}</h2>
            <p>the page your loooking is not available</p>
            </Paper>

      );
    }
  }
  
  export default PageNotFound;
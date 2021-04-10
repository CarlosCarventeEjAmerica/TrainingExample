//state function/ class componet

//Funcitonal component  with state

const Form = (props) => {
    const [title, setTitle] = React.useState();
    const [desc, setDesc] = React.useState();

    const titleChangeHandler= (event) => {
        setTitle(event.target.value);
    }

    const descChangeHandler= (event) => {
        setDesc(event.target.value);
    }
    const submitButtonHandler = (event) => {
        console.log(`
            title: ,${title}
            Description: ${desc}`);

    }
    //inmutable parameter only can change thru set title

    return(
        <div className="Box">
            <label>Blog title</label><br/>
            <input type ="text" onChange={titleChangeHandler}></input><br/>
            <label> Blog description</label><br/>
            <textarea onChange ={descChangeHandler}/><br/>
            <button onClick={submitButtonHandler}>add blog</button>
        </div>
    );
}

class App extends React.Component {
    someMethod(arg){
        console.log('app somemethod called!',arg);
    }
    render(){
        return(
            <div className= "App">
                <Form/>
            </div>
        );
    }
}

//class componet with state
class Form1 extends React.Component{
    
    state ={title: '', desc: ''};
    titleChangeHandler= (event) => {
        this.setState({...this.state, title: event.target.value});
    }

    descChangeHandler= (event) => {
        this.setState({...this.state, title: event.target.value});
    }
    submitButtonHandler = (event) => {
        console.log(`
        title: ,${title}
        Description: ${desc}`);

    }
    render(){
        return(
            <div className="Box">
                <label>Blog title</label><br/>
                <input type ="text" onChange={titleChangeHandler}></input><br/>
                <label> Blog description</label><br/>
                <textarea onChange ={descChangeHandler}/><br/>
                <button onClick={submitButtonHandler}>add blog</button>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
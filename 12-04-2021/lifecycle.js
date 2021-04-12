const View1 = (props) =>{
    React.useEffect(()=>{
        console.log('runs every time');
    });
    
    React.useEffect(()=>{
        console.log('runs when component is amounted');
    }, []);

    React.useEffect(()=>{
        console.log('runs when component prop/state is updated');
    }, [props.title]);

    React.useEffect(()=>{
        console.log('runs when component prop/state is updated');
    }, [props.desc]);

    React.useEffect(()=>{
        return()=> console.log('Runs when component is unmounted')
    });

    return(
        <div className="App">
            <div className= "Box">
                <h1>Apple</h1>
                <p>Price: 100</p>
            </div>
        </div>
    );
}


class App1 extends React.Component {
    constructor(){
        super();
        console.log('constructor');
    }
    render(){
        console.log('render')
        return(
            <div className="App">
                <div className= "Box">
                <h1>Apple</h1>
                <p>Price: 100</p>
                </div>
            </div>
        );
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
}

ReactDOM.render(<App1/>, document.getElementById('root'))
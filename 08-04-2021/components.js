//react Components

//funtional components
//props={name: 'a', price: '1'}

const Cart = (props) => {

    return(
        <div className="Box">
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <p>{props.children}</p>
        </div>
    );
}
//Class components
class Cart1 extends React.Component{
    xyz = 'abc'
    render(){
        return(
            <div className= "Box">
                <h1>{this.props.name}</h1>
                <p>Price: {this.props.price}</p>
            </div>
        );
    }
}
class NavBar extends React.Component{
    render(){
        return(
            <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            </div>
        );
    }
}
class Footer extends React.Component{
    render(){
        return(
            <footer class= "footer">
                <p>Author: Carlos Carvente------
                <a href="mailto:carlos.carvente@ejamerica">carlos.carvente@ejamerica.com</a></p>
            </footer>
        );
    }
}
// let app = (
//     <div>
//         <Cart name="Apple" price= "100"/>
//         <Cart name="Orage" price= "60"/>
//     </div>
// );

let app = (
        
        <div>
            <NavBar/>
            <Cart1 name="Apple" price= "100"/>
            <Cart1 name="Orage" price= "10"/>
            <Cart1 name="Pine Apple" price= "40"/>
            <Cart1 name="Strawberry" price= "150"/>
            <Footer/>
        </div>
);

ReactDOM.render(app, document.getElementById('root'))


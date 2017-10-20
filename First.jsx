import React from 'react';
import styles from './App.css';
import Counte from './Counte.jsx';
import ReactDOM from 'react-dom';

class First extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'November 26,2017',
            newDeadLine:'',
            deadlines: [],
            Persons : [
                {
                    "deadline":""
                },
                {
                    "name":"sravan",
                    deadline:""
                }
            ]
        }      
    }

   

    changeDeadLine() {

        this.setState({ deadline:this.state.newDeadLine })
    }

    getNewDeadLine(e) {
       
        console.log("event target "+e.target.value);
        this.setState({newDeadLine:e.target.value});     
    }
    
    render() {
        var element = "<div> This is JSX elemeent stored in variable</div>";
        return ( 
           <div className="container">
             
                <div className="row">
                     <Counte deadline = { this.state.deadline } /> 
                </div>


                <div className="row" style={{padding:"20px"}}>
                   {/* <input type = "text" placeholder = "Enter date"  name='date' onBlur={event=>this.setState({newDeadLine:event.target.value})}/> */}
                    <input  className="form-controll" type = "date" placeholder = "Enter date" onBlur={(event)=>this.getNewDeadLine(event)} />
                    <button className="btn btn-success" onClick = {this.changeDeadLine.bind(this)}> Submit </button> 
                     {/*  <button onClick = {() => this.changeDeadLine()}> Submit </button>  */}
                </div>
                   <ChildOfFirst /> 
                   <hr/>
                   <ForceUpdateComponent />
            </div>  
        );
    }
}

class ChildOfFirst extends React.Component {
    constructor() {
      super();
      this.findDomNodeHandler = this.changeColor.bind(this);
   };
    changeColor() {
        
        var myDiv = document.getElementById('myDiv1');
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    }

    render() {
        return (<div>
         <div id="MyDiv1" className="alert alert-warning"> This is Child Component first child: { this.props.Childs[0]} 
         if you click on this color of text will change.
        </div> 
         <button onClick={this.changeColor}>FIND DOME NODE</button>
         </div>
        );
    }
}

ChildOfFirst.defaultProps = {
    "Childs": ["one", "two", "three"]
}

class ForceUpdateComponent extends React.Component {
   
   
    forceUpdateCheck() {
        this.forceUpdate();
    }

    render() {
        return( 
            <div>
                <button onClick={this.forceUpdateCheck.bind(this)}> Update </button>
                <h4>Random number: {Math.floor(Math.random()*100)}</h4>
            </div>
        )
    }

}

export default First;
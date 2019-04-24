import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import ButtonComponent from './components/ButtonComponent';

class App extends Component {
  constructor(){
	  super(); 
	  
	  this.state = { // sets answer to nothing 
		  answer: ""
	  }
  }	
	
    onClick = button => { // when the user clicks on button 

        if(button === "="){ // if the user clicks on = then it calcualtes 
            this.calculate()
        }

        else if(button === "C"){ // clears the input 
            this.reset()
        }
        else if(button === "CE"){ // backspace the input 
            this.backspace()
        }

        else {
            this.setState({ 
                answer: this.state.answer + button
            })
        }
    };

    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                answer: (eval(this.state.answer) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                answer: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            answer: ""
        })
    };

    backspace = () => {
        this.setState({
            answer: this.state.answer.slice(0, -1)
        })
    };
  
  render() {
	  
    return (

	<div>
	 <center><h1>Simple React Calculator</h1></center>
      <div className="calculator-body">
		<div className="resultsScreen"><ResultComponent answer = {this.state.answer}/></div>
		<ButtonComponent onClick = {this.onClick}/>
      </div>
	</div>
    );
  }
}

export default App;

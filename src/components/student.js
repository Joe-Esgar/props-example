import React, {Component} from "react"

export default class Student extends Component{
    constructor(props){
        super(props)
        this.state = {
            questionToAsk:""
        }
    }

    handleChange = (event) =>{
        this.setState({questionToAsk:event})
    }
    render(){
        return(
            <div>
                <input onChange = {(e) => this.handleChange(e.target.value)}></input>
                <button onClick ={() => this.props.askQuestion(this.state.questionToAsk)}>Ask Question</button>
            </div>
        )
    }
}
import React, {Component} from "react"

export default class Student extends Component{
    constructor(props){
        super()
        this.state = {
            questionToDelete:0
        }
    }
    render(){
        return(
            <div>
                <input onChange = {(e) => this.setState({questionToDelete:e.target.value})}></input>
                <button onClick ={() =>this.props.answerQuestion(this.state.questionToDelete)}>Answer</button>
            </div>
        )
    }
}
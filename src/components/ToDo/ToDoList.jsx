import React, { Component } from 'react'
import { Input } from 'reactstrap'

import ToDoTable from './ToDoTable'

export default class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newToDo: '',
            toDoList: [],
            userInput: '', 
            functionTester: '',
        }
        this.setToDo = this.setToDo.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    setToDo(e) {
        this.setState({userInput: e.target.value})   
    }

    onFormSubmit(e) {
        e.preventDefault()
        this.setState({toDoList: this.state.toDoList.concat(this.state.userInput) })
        console.log(this.state.functionTester)
    }

    
    render() {

        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                <Input
                    type="text"
                    placeholder='Enter task here'
                    value={this.state.userInput}
                    onChange={this.setToDo}

                />
                </form>
                <ToDoTable toDo={this.state.toDoList}/>
            </div>
        )
    }
}



// start simple, every time. make things render first. 
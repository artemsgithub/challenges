import React, { Component } from 'react'
import { Input } from 'reactstrap'

import ToDoTable from './ToDoTable'

export default class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newToDo: '',
            toDoList: ['clean','play','code'],
        }
    }

    render() {
        return (
            <div>
                <Input
                    placeholder='Enter task here'
                />
                <ToDoTable toDo={this.state.toDoList}/>
            </div>
        )
    }
}



// start simple, every time. make things render first. 
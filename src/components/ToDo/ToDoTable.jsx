import React from 'react'
import { Table, Input } from 'reactstrap'


export default class ToDoTable extends React.Component {
    constructor(props) {
        super(props) 
       
        
    }
    
    
    render() {

        
        return (
            <Table>
                {this.props.toDo.map((item, index)=>{
                    return (
                      <tr key={index}>
                        <td style={{width: '90%'}}>{item}</td>
                        <td style={{width: '10%'}}>
                        <Input
                            
                            type='checkbox'
                            

                        /></td>
                      </tr>
                    );
                })}
            </Table>
        )
    }
}
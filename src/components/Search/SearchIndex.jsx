import React from 'react'
import { Input } from 'reactstrap'
import SearchList from './SearchList'


export default class SearchIndex extends React.Component {

  constructor(props) {
    super(props) 
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      search: ''
    }

    this.updateSearch = this.updateSearch.bind(this)
    
  }

  updateSearch(e) {
    this.setState({search: e.target.value})
  }

  render() {
    
  
    let filteredThings = this.state.things.filter(
      (thing) => {
        return thing.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1  
      }
    )
    

    return(
      <div>
        <Input 
          placeholder='Search here, dawg'
          value={this.state.search}
          onChange={this.updateSearch}
        />
        
        <SearchList things={filteredThings} />
      </div>
    )
  }
}
import React, { Component } from 'react';
import { FormGroup,InputGroup,FormControl,Button } from 'react-bootstrap';
import Gallery from './Gallery';
class Global extends Component
{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            items: []
        }
    }
    search() {
        const BASE_URl = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${BASE_URl}${this.state.query}`,{method:'GET'})
        .then(response => response.json())
        .then(json => {
            let { items } = json;
            this.setState({items})
        });
        console.log('search',this.state.query);
    }
    render() {
        return (
            <div className="Global"> 
                <h2>Book Explorer!!</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            onChange={event => this.setState({query:event.target.value})}
                            onKeyPress={event => {
                                if(event.key=='Enter'){
                                    this.search();
                                }
                            }}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={() => this.search()}>Enter</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </FormGroup>
                <Gallery items={this.state.items}/>
            </div>
        )
    }
}
export default Global;
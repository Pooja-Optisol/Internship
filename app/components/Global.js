import React from 'react';
import Component from 'react';
import FormGroup from 'react-bootstrap';
import FormControl from 'react-bootstrap';
import InputGroup from 'react-bootstrap';
import Glyphicon from 'react-bootstrap';
class Global extends Component
{
    render() {
        return (
            <div> 
                <h2>Book Explorer!!</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for a book"
                        />    
                        <InputGroup.Addon>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
            </div>
        )
    }
}
export default Global;
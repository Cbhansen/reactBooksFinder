import React, { Component } from 'react';
import { Well, FormControl } from 'react-bootstrap';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange(e) {
        this.setState({ value: e.target.value});
        this.props.onChange(this.state.value)
    }
    render() {
        return (
            <div>
                <Well>
                    <FormControl 
                    type="text"
                    value={this.state.value}
                    placeholder="Search books"
                    onChange={this.onChange.bind(this) }>
                    </FormControl>
                </Well>
            </div>
        )
    }
}

export default SearchInput;
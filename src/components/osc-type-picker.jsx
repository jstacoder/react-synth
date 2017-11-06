import React, { Component } from 'react'

export default class OscTypePicker extends Component {
    handleChange = e =>{
        this.props.setOscType(e.target.value)
    }
    render(){
        return (
            <select value={this.props.oscType} onChange={this.handleChange}>
                <option value="sine">sine</option>
                <option value="sawtooth">sawtooth</option>
                <option value="triangle">triangle</option>
                <option value="square">square</option>
            </select>
        )
    }
}
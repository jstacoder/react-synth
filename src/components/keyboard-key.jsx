import React, { Component } from 'react'

export default class KeyboardKey extends Component{    
    constructor(props){
        super(props)
        this.state = {
            isHovered: false,
            clicking: false,
        }
    }
    handleHover = e =>{
        this.setState({isHovered: true})
    }
    handleMouseOut = e =>{
        this.setState({isHovered: false})
        this.props.stop(this.props)
    }
    playNote = () =>{

    }
    onClick = e =>{
        this.state.clicking ? this.handleMouseUp() : this.handleMouseDown()
    }
    handleMouseDown = () =>{
        this.setState({clicking: true})
        this.props.play(this.props)
    }
    handleMouseUp = () =>{
        this.setState({clicking: false})
        this.props.stop(this.props)
    }
    render(){
        const borderWidth = this.state.clicking ? '1.2px' : '1px'
        let style = {height: "75px", width: "20px",  borderRight: `${borderWidth} solid white`, borderLeft: `${borderWidth} solid white`, border: `${borderWidth} solid black`,display:"inline-block"}
        if(this.state.isHovered){
            style['background'] = 'grey'
            //style['opacity'] = 0.5
        }
        if(this.state.clicking){
        style['background'] = 'lightgrey'
        }
        return (
            <div onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} style={style} onMouseLeave={this.handleMouseOut} onMouseOver={this.handleHover} onMouseEnter={this.handleHover}>
                <div style={{height:"20px", width:"20px", borderRight: '1px solid white', borderLeft: '1px solid white',backgroundColor:"black"}}></div>
                <p>
                    {this.props.note}
                </p>
                <p style={{fontSize:'10px', marginTop:'-10px'}}>
                  {this.props.octave}    
                </p>
            </div>
        )
    }   
}


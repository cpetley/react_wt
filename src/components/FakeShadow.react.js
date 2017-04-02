import React, { Component } from 'react';

class FakeShadow extends Component {
    
    constructor(props){
        super(props);
    }
    
    render() {
        
        const fsoutstyle = {
            backgroundColor:this.props.bgcolor,
            
        }
        
        
        const fsmhstyle = {
            minHeight:'10px',
            flex:1
        }
        
        
        return (
        
            <div className="fsout row" style={fsoutstyle}>
                <div className="fsfrigshadow ">
                    <div className="fsminheight" style={fsmhstyle}>
                    </div>
                </div>
            </div>
        
        );
    }
}


export default FakeShadow;



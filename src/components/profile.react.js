import React, { Component } from 'react';

class Profile extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        
        const profStyle = {
            paddingTop:'15px',
            paddingBottom:'10px'
        }
        
        return (
            
            <div 
                className="col-6 col-md-3 text-center"
                style={profStyle}>
                
                <img src={this.props.url} className="img-fluid col-12 rcorners" />
                
                <div>{this.props.name}</div>
                <div>{this.props.description}</div>
            
            </div>
        );
    }
}


export default Profile;


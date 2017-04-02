import React, { Component } from 'react';
import bnrstyle from './banner.style.css';
import { Link } from 'react-router-dom';
import { Nav, Button, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';


class Banner extends Component {
       
    constructor(props){
        super(props);
    }
    
    render() {
        const bannerurl = {
            backgroundImage:"url(" + this.props.bgurl + ")"
        }
         
        let nextlinkbutton;
        if (this.props.nextlink){
            nextlinkbutton = (
            <Link className="btn btn-primary" to={this.props.nextlink}>{this.props.nextlinktext}</Link>);
        }
        
        return (

<div                 
    className="bnrimg container-fluid shadow "
    style={bannerurl}>
                
        <div className="col-10 offset-1  col-lg-6 offset-lg-1 col-md-8 offset-md-1 op06 bnrinfobox">
           
	      <h1 className="">{this.props.title}</h1>
            
            
		  <h5 className="blurb">{this.props.blurb}</h5>
          
           {nextlinkbutton}
         
                
            
	   </div>
            
</div>
                        
        );
    }
}


export default Banner;





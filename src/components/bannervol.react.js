import React, { Component } from 'react';
import bnrstyle from './banner.style.css';
import { Link } from 'react-router-dom';
import { Nav, Button, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';


class BannerVol extends Component {
       
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
            <Link className="btn btn-primary" to={this.props.nextlink}>{this.props.nextlink}</Link>);
        }
        
        return (

<div                 
    className="bnrimg container-fluid shadow "
    style={bannerurl}>
                
        <div className="col-10 offset-1  col-lg-6 offset-lg-1 col-md-8 offset-md-1 op06 bnrinfobox">
           
	      <h1 className="">{this.props.title}</h1>
            <h5>We are always looking for new volunteers at Waggy Tails! We have a fantastic team of under 18s who buddy the Waggy Tails members as they enjoy the activities at the club. If you think you could help, please<Link to='contactus'>get in touch</Link>or<Link to='/images/forms/Volunteer_u18.pdf' download='u18_application_form.pdf' target='_self'>download the volunteer form</Link>.</h5>
                
            <h5>We have an equally fantastic team of over 18s who fulfill many essential roles at Waggy Tails. If you can spare the time, we've got areas we need help. Please<Link to='contactus'>get in touch</Link>or 
            <Link to='/images/forms/Volunteer_o18.pdf' download='o18_application_form.pdf' target='_self'>download the volunteer form</Link>. </h5>       
                
            
		  
         
                
            
	   </div>
            
</div>
                        
        );
    }
}


export default BannerVol;





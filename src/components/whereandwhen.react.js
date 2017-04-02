import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.style.css';
import Banner from './banner.react';
import Narration from './narration.react';
import Header from './header.react';
import { Nav, Button, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';
import FakeShadow from './FakeShadow.react';

class WhereAndWhen extends Component {

    constructor(props){
        super(props);
    }

    render() {
        
        const iframestyle = {
            width:'inherit',
            height:'400px',
            borderStyle:'solid',
            borderColor:'black'
        }
        
        const flexcontainer = {
                display:'flex',
                alignItems: 'center',
                paddingTop:'30px',
                paddingBottom:'30px'
        }
        
        return (

<div className="container-fluid " style={{backgroundColor:'#F1FEED'}}>            
        <FakeShadow bgcolor="#F1FEED" />

            
        <div className="row" style={flexcontainer}> 
            
		<div className="col-md-4 offset-md-1 col-sm-10 offset-sm-1 col-12 textcolwhite updoffset">

			<h3 className="newslogan smallerh1">When we meet</h3>

			<p className="exptext">Waggy Tails happens between 4:30 and 6:30 on Wednesday's during the school term. The individual class times are allocated - if you struggle to get to Waggy Tails for a particular time please let us know!

			</p>

			<h3>Where we meet</h3>

			<p className="exptext">We are fortunate to be able to meet at Emmanual Church Hall, Normanton Road, South Croydon.
			</p>

			<p className="exptext">Postcode: CR2 7AF</p>

			<p className="exptext">It is accessible by bus numbers 64, T33, 409, 412 (Carlton Road stop – walk uphill, take first left, it is on your right at the end of the road)</p>


		</div>
        
		<div className="col-md-5 offset-md-1 col-xs-10 offset-xs-1" >

            <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJY2vk7a0AdkgREpmF7GnqWS8&key=AIzaSyDriaFr-Nb1dzxIA8rEbMEfv2-otezknLA" style={iframestyle}>
                
            </iframe>


		</div>        
        
        </div>
        
        
            
</div>            
            
            
        );
    }
}


export default WhereAndWhen;





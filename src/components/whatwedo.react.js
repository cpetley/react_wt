import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.style.css';
import Banner from './banner.react';
import Narration from './narration.react';
import Header from './header.react';
import { Nav, Button, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';

class WhatWeDo extends Component {

    constructor(props){
        super(props);
    }

    
    render() {
        const homestyle = {
            backgroundImage: "url('/images/group3_400.png')"
        }

        
        return (

            <div>            

<Narration 
            shadow={1} 
            bgcolor="#AEC6CF" 
            title="What we do" 
            maintitle="a lot goes on at waggy tails" urlmob="/images/wwd1_300.png" urldesk="/images/wwd1_600.png" 
            p1="Waggy Tails is a club for young people with special needs/disabilities." 
            p2="We have specially trained dogs that attend, giving our members the opportunity to interact with them and bring about confidence through responsibility." 
            />
            
<Narration 
            shadow={0} 
            bgcolor="white" 
            title="Who we are here for"  
            urlmob="/images/wwd2_300.png" 
            urldesk="/images/wwd2_600.png" 
            p1="The Waggy Tails members are aged from 13-18 years. "
            p2="All of our members have special needs/disabilities, with social and communication difficulties being the common link between them."
            p3="We never set out to distinguish which disabilities Waggy Tails would best suit. It just happened that quite a few of our children at Waggy Tails are on the Autistic Spectrum e.g. Aspergers Syndrome.
            " />
            
<Narration 
            shadow={0} 
            bgcolor="#CFCFC4" 
            title="What goes on"  
            urlmob="/images/wwd3_300.png" 
            urldesk="/images/wwd3_600.png" 
            p1="Waggy Tails is divided up into different activity rooms for our members to enjoy. The main activities are Obedience Training and Dog Tricks and Games. There is also a reading corner where our members can read to the special reading dogs and a vet check area where they can gain a certificate after they have examined the dog."
            nextlink="whatgoeson"
            nextlinkwords="Find out more"
             />
            
                  
            
</div>            
            
            
        );
    }
}


export default WhatWeDo;





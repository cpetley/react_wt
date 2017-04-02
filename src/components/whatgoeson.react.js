import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.style.css';
import Banner from './banner.react';
import Narration from './narration.react';
import Header from './header.react';
import { Nav, Button, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';

class WhatGoesOn extends Component {

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
            title="Dog Obedience Room" 
            maintitle="a lot goes on at waggy tails" urlmob="/images/wgo1_400.png" urldesk="/images/wgo1_600.png" 
            p1="The Obedience Training sessions run from 4:30-5pm, 5-5:30pm, 5:30-6pm, and 6-6:30pm." p2="Karen and Hayley put the Waggy Tails members and their dogs through their training. Here they will teach their dogs to sit, stay, lie down, come and walk to heel." 
            
            />
            
<Narration 
            shadow={0} 
            bgcolor="white" 
            title="Trick and Puzzle Room"  
            urlmob="/images/wgo2_400.png" 
            urldesk="/images/wgo2_600.png" 
            p1="The dogs in the trick room enjoy doing tricks and solving problems. There are also games for the Waggy Tails members to play." />
            
<Narration 
            shadow={0} 
            bgcolor="#CFCFC4" 
            title="Agility Room"  
            urlmob="/images/wgo3_400.png" 
            urldesk="/images/wgo3_600.png" 
            p1="We have dog jumps, tunnels and weaves for training the dogs with the agility equipment. The dogs in this room are very good at obstacle courses."
  
             />

<Narration 
            shadow={0} 
            bgcolor="#AEC6CF" 
            title="Parent Zone"  
            urlmob="/images/wgo4_400.png" 
            urldesk="/images/wgo4_600.png" 
            p1="There is a parent zone at Waggy Tails with tea and coffee. This provides an opportunity for some relaxation and a chance to meet people in similar situations and circumstances. There is a parent zone at Waggy Tails with tea and coffee. This provides an opportunity for some relaxation and a chance to meet people in similar situations and circumstances. "

             />
            
                  
            
</div>            
            
            
        );
    }
}


export default WhatGoesOn;





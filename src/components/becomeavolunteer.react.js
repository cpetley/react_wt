import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.style.css';
import BannerVol from './bannervol.react';
import Banner from './banner.react';
import Narration from './narration.react';


class BecomeAVolunteer extends Component {

    constructor(props){
        super(props);
    }

    
    render() {
        const homestyle = {
            backgroundImage: "url('/images/group3_400.png')"
        }

        let contactus = <Link to="/contactus" style={{paddingRight:0, paddingLeft:0}}>contact us</Link>;
        
        let hearfromyou = <Link to="/contactus" style={{paddingRight:0, paddingLeft:0}}>hear from you</Link>;
                
        let u18form = <Link to='/images/forms/Volunteer_u18.pdf' download='u18_application_form.pdf' target='_self' style={{paddingRight:0, paddingLeft:0}}>download the volunteer form</Link>;

        let o18form = <Link to='/images/forms/Volunteer_o18.pdf' download='o18_application_form.pdf' target='_self' style={{paddingRight:0, paddingLeft:0}}>download the volunteer form</Link>;

        
        
        return (
<div>            


            
            
    <Banner 
    title="Become a volunteer" 
    blurb={<p><h5>We are always looking for new volunteers at Waggy Tails! We have a fantastic team of under 18s who buddy the Waggy Tails members as they enjoy the activities at the club. If you think you could help, please {contactus} or {u18form}.</h5>
                
            <h5>We have an equally fantastic team of over 18s who fulfill many essential roles at Waggy Tails. If you can spare the time, we've got areas we need help. Please {contactus} or {o18form}.</h5></p>}
    bgurl="/images/volunteer_400.png"        

            />
        
            
            
</div>            
            
            
        );
    }
}


export default BecomeAVolunteer;





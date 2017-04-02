import React, { Component } from 'react';
import Banner from './banner.react';
import Profile from './profile.react';

class Supporters extends Component {


    render() {
        return (
    <div>        
            
            <Banner 
    title="Our Supporters" 
    blurb="Despite our many attempts to make it not be so, Waggy Tails requires money to run! To that end, we'd like to thank our many generous supporters, without whom we would not be able to operate."
    
    bgurl="/images/supporters_800.png"
        
            
            
            
            
            />
    <div className="container-fluid vertical-center text-center" style={{backgroundColor:'#AEC6CF', color:'white'}}>
		<div className="center updoffset">
			<h3 className="smallerh1 newslogan lroffset">

				So in no particular order we'd like to thank...
			</h3>
            
            
		</div>
	</div>  
            
   <div  style={{backgroundColor:'#AEC6CF'}}>
            <div className="row" style={{display:'flex',alignItems: 'center'}}>
		
            <Profile 
                url="/images/supporters/cin.png"
                name=""
                description=""
            />
            <Profile 
                url="/images/supporters/f4d.png"
                name=""
                description=""
            />
            <Profile 
                url="/images/supporters/hacc.png"
                name=""
                description=""
            />
            <Profile 
                url="/images/supporters/johnlewis.png"
                name=""
                description=""
            />            
            <Profile 
                url="/images/supporters/jpetchey.png"
                name=""
                description=""
            />
            <Profile 
                url="/images/supporters/rc.png"
                name=""
                description=""
            />
            <Profile 
                url="/images/supporters/waitrose.png"
                name=""
                description=""
            />
            </div>
	</div>

    <div className="container-fluid vertical-center text-center" style={{backgroundColor:'#AEC6CF', color:'white'}}>
		<div className="center updoffset">
			<h3 className="smallerh1 newslogan lroffset">

				You're all amazing and we're very grateful.
			</h3>
            
            
		</div>
	</div> 
        
            
            
        </div>    
        );
    }
}

export default Supporters;


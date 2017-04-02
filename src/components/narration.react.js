import React, {Component} from 'react';
import narstyle from './narration.style.css';
import FakeShadow from './FakeShadow.react';
import { Link } from 'react-router-dom';

class Narration extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
    
        const bgstyle={
            backgroundColor : this.props.bgcolor
        }
        
        const squashed = {
            marginTop : 0,
            marginBottom : 0,
            paddingTop: 0,
            paddingBottom: '5px'
        }
        
        let shadowdiv;
        if (this.props.shadow === 1){
            shadowdiv = <FakeShadow bgcolor={this.props.bgcolor} />
        }
        
        let nextlinkbutton;
        if (this.props.nextlink){
            nextlinkbutton = (
            <Link className="btn btn-primary" to={this.props.nextlink}>{this.props.nextlinkwords}</Link>);
        }
        
        return (
  
<div className="container-fluid">
            
            {shadowdiv}
            
    <div 
            className="row narrationcontainer"
            style={bgstyle}>
            
    		  <div className="col-12 col-sm-10 offset-sm-1 col-md-4 offset-md-1 updoffset vcenter" >
            			
            <img src={this.props.urldesk} className="img-fluid col-12 rcorners hidden-sm-down desknarrationimg" />

			<img src={this.props.urlmob} className="img-fluid col-12 rcorners hidden-md-up mobnarrationimg" />
            

		      </div>
            
		      <div className=" col-sm-10 offset-sm-1 col-md-5 offset-md-1 updoffset" >
		
			<h3 className="newslogan smallerh1">{this.props.title}</h3>

			<p style={squashed}>{this.props.p1}</p>
            <p style={squashed}>{this.props.p2}</p>
            <p style={squashed}>{this.props.p3}</p>
            {nextlinkbutton}
			

        </div>        
    </div>        
</div>
        );
    }
}

export default Narration;




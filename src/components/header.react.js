import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';
const logostyle = {
    maxHeight:'60px',
    width:'auto'
}
const tabstyle = {
    flex: 0.25,
    flexShrink: 1
    
}

const ddstyle = {
    flex: 1
}

const navbarStyle = {
    flex:1,
    backgroundColor:'pink',
    zIndex: 20
}

class Header extends Component {
    handleSelect(eventKey) {
        event.preventDefault(); 
    }
    
    render() {
        return (
<div className="container-fluid" style={{zIndex : 10}}>
    <div className="row">
        <div className="col-md-10 headertext"  >
            <div className="row">
                <Link to="/">
                    <img src="/images/mylogo.png" className="img-responsive col-xs-12" style={ logostyle } />
                </Link>
            </div>
        </div>

				
		<div className="col-md-2">

		</div>
	</div>
            
          
           
    <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect} style={navbarStyle}>
        
        
        <NavDropdown eventKey={1} title="Our Club" id="nav-dropdown" style={tabstyle}>
            <MenuItem eventKey="1.1" style={ddstyle}>
                <Link to="/whatwedo" style={ddstyle}>What we do</Link>
            </MenuItem>
            <MenuItem eventKey="1.2" style={ddstyle}>
                <Link to="/whatgoeson">What goes on</Link>
            </MenuItem>
            <MenuItem eventKey="1.3" style={ddstyle}>
                <Link to="/whereandwhen">Where and when</Link>
            </MenuItem>
            <MenuItem eventKey="1.4" style={ddstyle}>
                <Link to="/howitallstarted">How it all started</Link>
            </MenuItem>

        </NavDropdown>

        <NavDropdown eventKey={2} title="Our Heroes" id="nav-dropdown" style={tabstyle}>
            <MenuItem eventKey="2.1">
                <Link to="/ourvolunteers">Our Volunteers</Link>
            </MenuItem>
            <MenuItem eventKey="2.2">
                <Link to="/ourdogs">Our Dogs</Link>
            </MenuItem>
            <MenuItem eventKey="2.3">
                <Link to="/oursupporters">Our Supporters</Link>
            </MenuItem>

        </NavDropdown>
            
        <NavDropdown eventKey={3} title="Get Involved" id="nav-dropdown" style={tabstyle}>
            <MenuItem eventKey="3.1">
                <Link to="/getinvolved">Get Involved</Link>
            </MenuItem>
            <MenuItem eventKey="3.2">
                <Link to="/bringadog">Bring a Dog</Link>
            </MenuItem>
            <MenuItem eventKey="3.3">
                <Link to="/donate">Donate</Link>
            </MenuItem>

        </NavDropdown>

        <NavDropdown eventKey={4} title="Helpful Info" id="nav-dropdown" style={tabstyle}>
            <MenuItem eventKey="4.1">
                <Link to="/applytojoin">Apply to join</Link>
            </MenuItem>
            <MenuItem eventKey="4.2">
                <Link to="/fees">Membership Fees</Link>
            </MenuItem>
            <MenuItem eventKey="4.3">
                <Link to="/forms">Forms forms forms!</Link>
            </MenuItem>
            <MenuItem eventKey="4.4">
                <Link to="/contactus">Contact us</Link>
            </MenuItem>

        </NavDropdown> 
            
           <DropdownButton title="Dropdown" id="bg-nested-dropdown">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
            
    </Nav> 
</div>
        );
    }
}

export default Header;


/*
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded" >
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false">
        <span className="navbar-toggler-icon"></span>
        </button>


        <Link to="/home" className="navbar-brand hidden-lg-up">
            <img src="/images/mylogo.png" alt="" className="img-responsive col-xs-12" style="max-width:100%; max-height:60px;" >
             
          
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link to="http://example.com" className="nav-link dropdown-toggle text-center" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Our Club
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to="whatwedo" className="dropdown-item">What we do</Link>
                <Link to="whatgoeson" className="dropdown-item" >What goes on</Link>
                <Link to="whereandwhen" className="dropdown-item">Where and when</Link>
                <Link to="howitallstarted" className="dropdown-item">How it all started</Link>
                
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link to="http://example.com" className="nav-link dropdown-toggle text-center" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Our Heroes
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to="ourdogs" className="dropdown-item">Our dogs</Link>
                <Link to="ourvolunteers" className="dropdown-item">Our volunteers</Link>
                <Link to="oursupporters" className="dropdown-item" >Our supporters</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link to="http://example.com" className="nav-link dropdown-toggle text-center" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Get involved
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to="becomeavolunteer" className="dropdown-item" >Become a volunteer</Link>
                <Link className="dropdown-item" to="bringadog">Bring a dog</Link>
                <Link className="dropdown-item" to="donate">Donate</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-center" to="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Helpful info
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="join">Apply to join</Link>
                <Link className="dropdown-item" to="fees">Membership fees</Link>
                <Link className="dropdown-item" to="forms">Forms forms forms!</Link>
                <Link className="dropdown-item" to="contactus">Contact us</Link>

              </div>
            </li>

          </ul>
        </div>
      </nav>
      */
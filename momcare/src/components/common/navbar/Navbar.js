import React, {useState} from 'react'
import './Navbar.css'
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';
import Logo from './../../../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showNavText, setShowNavText] = useState(false);
  return (
    <MDBNavbar expand='lg' className='navbarCol'>
            <MDBContainer>
                <MDBNavbarBrand className='navTextCol' tag={Link} to='/' ><img src={Logo} className='logoImg' /></MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarText'
                    aria-controls='navbarText'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavText(!showNavText)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNavText}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink className='navTextCol' active aria-current='page' tag={Link} to='/home'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink className='navTextCol' tag={Link} to='/admin'>
                                Admin
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink className='navTextCol' tag={Link} to='/appointments'>
                                Appointments
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink className='navTextCol' tag={Link} to='/users'>
                                Users
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink className='navTextCol' tag={Link} to='/profile'>
                                Profile
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink className='navTextCol' tag={Link} to='/#'>
                                Log Out
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                       
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
  )
}

export default Navbar
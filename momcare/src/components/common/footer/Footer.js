import React from 'react'
import './Footer.css'
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center text-light p-3 fter' >
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light txtfoot' href='#'>
          MOMCARE.com
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer
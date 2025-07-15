import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
const Contactus = () => {
  return (
    <div className='p-3 d-flex justify-content-center'>
        <div style={{border:'1px solid black',borderRadius:'10px', width:'fit-content',padding:'10px'}} >
        <h4 className='text-success'>Contact US</h4>
        <p>Please feel free to contact us for any enquiry,we will be happy to help you </p>
      <p><a href='tel:+91 49848458844'><FontAwesomeIcon icon={faPhone} className="me-2"/> +91 49848458844</a></p>
      <p><a href='mailto:support@fcfund.com'><FontAwesomeIcon icon={faMailBulk} className="me-2" /> support@fcfund.com</a></p>
      </div>
    </div>
  )
}

export default Contactus

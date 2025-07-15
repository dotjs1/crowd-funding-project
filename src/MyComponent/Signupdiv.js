import './Components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Container,Row,Col } from 'react-bootstrap';
const Signupdiv = () => {
  return (
    <>
<Container fluid className='p-3' style={{ background: '#0d3b66' }} >
  <Row style={{display:'flex',alignItems:'center',padding:'10px'}}>
<Col xs={12}   md={6} className='d-flex flex-row align-items-left flex-md-row justify-content-center gap-3'>
<h5 className='mb-0 mt-2'>Welcome to FcFund</h5>
<button className='btn btn-success p-1' >Signup <FontAwesomeIcon icon={faArrowRight} style={{background:'none'}} className='ms-2'/></button>
</Col>
 {/* Contact Info Section */}
<Col  xs={12}
            md={6} className='contacts  d-flex flex-row flex-md-row align-items-left justify-content-center gap-3'>
<p><a href='tel:+91 49848458844'><FontAwesomeIcon icon={faPhone} className="me-2"/> +91 49848458844</a></p>
<p><a href='mailto:support@fcfund.com'><FontAwesomeIcon icon={faMailBulk} className="me-2" /> support@fcfund.com</a></p>
</Col>
  </Row>
</Container>
  <hr/>
  </>
  )
}

export default Signupdiv

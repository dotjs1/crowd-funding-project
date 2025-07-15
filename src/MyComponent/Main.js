import image from './images/istockphoto-921346738-612x612.jpg';
import { Row,Container,Col } from 'react-bootstrap';
import Home_crowfund from './Home_crowfund';
const Main = () => {
  return (
    <>
    <Container fluid style={{background:'rgb(234, 227, 227)',}}> 
<Row className='Mainpage ' style={{width:'100%'}}>
   {/* Left Content Column */}
      <Col className="contain p-3 d-flex flex-column align-items-left justify-content-center" style={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
        <p style={{ color: 'green', fontWeight: 'bold' }}>– Crowdfunding</p>
        <h1>We help Surface</h1>
        <p className="p1 fs-5">Innovations in technology</p>
        <p>
          {/* Placeholder text — replace with actual content */}
          Hello, this is sample placeholder text. Replace this with meaningful info about your platform.
        </p>
 {/* Action Buttons */}
         <div className="btns my-3">
            <button type="button" className="btn btn-success me-2">
              Learn More
            </button>
            <button type="button" className="btn btn-secondary">
              Donate
            </button>
          </div>

           {/* Partners */}
          <div className="mt-4">
            <p style={{ color: 'grey', fontFamily: 'sans-serif' }}>Our Partners</p>
            <div
              className="name d-flex gap-3 text-muted"
              style={{ fontFamily: 'sans-serif' }}
            >
              <h5>Peepak</h5>
              <h5>Heimens</h5>
              <h5>Glowup</h5>
            </div>
          </div>
      </Col>

      <Col  className="image_div p-3 d-flex align-items-center justify-content-center" style={{borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}>
        <img className="main_image rounded" src={image}  alt="Crowdfunding concept illustration" style={{objectFit:'cover'}}/>
      </Col>  
    </Row>
    </Container>
    <Home_crowfund/>
    </>
  );
};

export default Main;
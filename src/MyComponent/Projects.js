import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
const Projects = ({onChange,value}) => {
  return (
    <>
    <Container fluid >
        <Row className=' d-flex flex-column' >
          <Col className='p-3 d-flex text-white flex-column align-items-left flex-md-column justify-content-center gap-3' style={{background:'green'}}>
            <h1 style={{backgroundColor:'green'}}>Lets finds a Crowdfunding projects around the world</h1>
            <p style={{backgroundColor:'green'}}>Explore Projects.....</p>
            </Col>
              <Col  className='p-2 d-flex flex-row align-items-left flex-md-row justify-content-center gap-3' style={{color:'green'}}>
              <div className='search d-flex flex-row'>
        <select id="Categories" name="Categories">
            <option value="All">All Category</option>
            <option value="Medical">Medical</option>
            <option value="Finance">Finance</option>
            <option value="Environment">Environment</option>
        </select>
        <hr style={{ border: '1.5px solid green',height:'30px'}} />
        <input className='searchinput' placeholder='Search by Name' value={value} onChange={onChange}/>
        </div>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default Projects

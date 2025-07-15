import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faMailBulk,
  faMobile,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
const FooterSection = ({ title, children }) => {
  const [isopen, setopen] = useState(false);
  const ontoggle = () => setopen(!isopen);
  return (
    <div className='footer-section mb-3'>
      <div
        className='d-flex collapse_div justify-content-between d-md-none'
        onClick={ontoggle}
        role="button"
        aria-expanded={isopen}
        aria-controls={`footer-collapse-${title}`}
      >
        <h6>{title}</h6>
        <span>{isopen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}</span>
      </div>
      {/* for mobile */}
      <div
        id={`footer-collapse-${title}`}
        className={`collapse_div_mobile collapse ${isopen ? 'show' : ''} d-md-none mt-2`}
      >
        {children}
      </div>
      {/* for desktop */}
      <div className='d-none d-md-block'>
        <h5 className='mt-2 mb-4 text-success'>{title}</h5>
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark  pt-4 pb-4">
      <section className="container">
        {/* Branding */}
        <article className="text-center mb-4">
          <h2 className="fw-bold">FcFund</h2>
          <p className="fst-italic">Empowering dreams, one fund at a time.</p>
        </article>

        <div className="row">
          <article className="col-12 col-md-3">
            <FooterSection title="Explore">
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li><a href="/about" className="footer-btn">About Us</a></li>
                <li><a href="/how-it-works" className="footer-btn">How It Works</a></li>
                <li><a href="/faqs" className="footer-btn">FAQs</a></li>
              </ul>
            </FooterSection>
          </article>

          <article className="col-12 col-md-3">
            <FooterSection title="Legal">
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li><a href="/terms" className="footer-btn">Terms of Service</a></li>
                <li><Link to="/privacy" className="footer-btn">Privacy Policy</Link></li>
              </ul>
            </FooterSection>
          </article>

          <article className="col-12 col-md-3">
            <FooterSection title="Contact">
              <p><a href="mailto:support@fcfund.com" className=" text-decoration-none"><FontAwesomeIcon icon={faMailBulk} />support@fcfund.com</a></p>
              <p><a href="tel:+9149848458844" className="text-decoration-none"><FontAwesomeIcon icon={faMobile} /> +91-49848458844</a></p>
              <p><FontAwesomeIcon icon={faLocationDot} /> 1234 Innovation Street, Haridwar</p>
            </FooterSection>
          </article>

          <article className="col-12 col-md-3">
            <FooterSection title="Follow Us">
              <div className="d-flex flex-column gap-2">
                <a href="#" className="footer-btn"><i className="fab fa-facebook-f me-2"></i><FontAwesomeIcon icon={faFacebookF} style={{background:'none'}}/> Facebook</a>
                <a href="#" className="footer-btn"><i className="fab fa-instagram me-2"></i><FontAwesomeIcon icon={faInstagram}style={{background:'none'}}/> Instagram</a>
                <a href="#" className="footer-btn"><i className="fab fa-twitter me-2"></i><FontAwesomeIcon icon={faTwitter}style={{background:'none'}}/> Twitter</a>
              </div>
            </FooterSection>
          </article>


          {/* Newsletter */}
          <article className="text-center pt-4 pb-4 border-top mt-4">
            <h5 className="mb-3">Newsletter</h5>
            <p className='text-primary fs-5'>Subscribe for updates, success stories, and new campaigns!</p>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
              <input className='form-control w-50' placeholder='Your Email' type='email' style={{border:'2px solid black'}} />
              <button className='btn btn-outline-light footer-btn'>Subscribe</button>
            </div>
          </article>

          {/* Footer Bottom */}
          <article className="text-center pt-3 pb-2 border-top mt-4">
            <p className="mb-0 text-success">&copy; 2025 FcFund. All rights reserved.</p>
          </article>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

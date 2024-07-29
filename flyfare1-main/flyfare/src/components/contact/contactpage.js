import React from 'react';
import './contactpage.css';
import { FaInstagram } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import BackButton from './backbutton'; // Adjust path as needed
import Header from '../../Header'; // Adjust path as needed
import Footer from '../Footer/Footer1'; // Adjust path as needed

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="contact-page">
        <div className="contact-header">
          <BackButton />
         
        </div>
<div className='conatctn'>
<h2>Contact Us</h2>
</div>
        

        <div className="contact-information">
          <h3>Contact Information</h3>
          <p>
            We do not offer refunds for any payments made for our services, including
            but not limited to subscription fees, credits, or promotional offers.
            Once a payment is made, it is non-refundable.
          </p>
          <div className="contact-details">
            <div className="contact-method">
              <MdMarkEmailUnread />
              <p>
                You can email us at <a href="mailto:support@onelifehealth.care">support@onelifehealth.care</a> for any inquiries or assistance. Our support team will respond as soon as possible.
              </p>
            </div>
            <div className="contact-method">
              <FaInstagram />
              <p>
                You can also reach out to us on Instagram <a href="https://www.instagram.com/onelifehealth_care">@onelifehealth_care</a> by sending a direct message.
              </p>
            </div>
          </div>
        </div>

        <div className="hours-of-operation">
          <h3>Hours of Operation</h3>
          <p>
            Our support team is available during the following hours:
          </p>
          <p>Monday to Friday: 9:00 AM to 6:00 PM (GMT+5:30)</p>
          <p>Closed on weekends and public holidays</p>

          <h3>Response Time</h3>
          <p>
            We strive to respond to all inquiries within 24-48 hours during our hours of operation. Response times may vary depending on volume.
          </p>

          <h3>Please Note:</h3>
          <p>
            For urgent matters, please include "URGENT" in the subject line of your email. Provide as much detail as possible to help us assist you effectively.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;

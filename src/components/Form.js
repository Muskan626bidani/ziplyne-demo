import React, { useState } from "react";
import './Form.css';
export default function Form() {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  
   

  return( 
    
    <>
  {/* <div></div> */}
  <div className='Form'>

      <h1>Get a Ziplyne Demo</h1>
  <input placeholder="First Name" id= "fname"/>

<input placeholder="Last Name" id= "lname"/>

<input placeholder="Email Address" type="email" id= "email_add"/>
<input placeholder="Phone" type= "phone" id="phone_no"/> 
<input placeholder="Company" id="company"/> 
<div className="dropdown">
Which Information are you seeking?
<select id="drop_down">
  
              <option selected hidden value="">
                --Select any one--
              </option>
              <option name="club_alumni" value=" Club Alumni">
              Looking to understand more about DAPs
              </option>
              <option name="companyrepresentative" value="Company Representative">
              Seen another DAP and want to compare against Ziplyne
              </option>
              <option name="student" value="Student">
              Looking to make a decision/purchase of a DAP
              </option>
            </select></div>
<div className="demo__button">
            <button id="demo_button" onClick={onClick}> Request a Demo </button>

            {showText ? <Text /> : null} </div> 
           
<div className='Terms'>
          <p>By submitting you agree to our <a href='#'>Terms of Services</a> & <a href='#'>Privacy Policy</a></p>
            </div>
  </div>
  </>
  );
 
}
const Text = () => <div className="submit-text">Thank you for requesting a Demo and providing us with some more context about you.



Our team will be in touch with you.



</div>;

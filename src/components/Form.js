import React, { useState } from "react";
import './Form.css';
import db from '../Firebase.js'
import 'react-phone-number-input/style.css'
import { isValidPhoneNumber } from 'react-phone-number-input'
import PhoneInput from 'react-phone-number-input'
import { collection, getDocs, Timestamp, doc, setDoc } from 'firebase/firestore'

export default function Form() {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  const [value, setValue] = useState();
//   isValidPhoneNumber('+12223333333') === false
// isValidPhoneNumber('+12133734253') === true
  return( 
    
    <>
  <div className='Form'>

      <h1>Get a Ziplyne Demo</h1>
  <input placeholder="First Name" id= "demo_FirstName"/>

<input placeholder="Last Name" id= "demo_LastName"/>

<input placeholder="Email Address" type="email" id= "demo_email"/>
{/* <input placeholder="Phone" type= "phone" id="demo_phone"/>  */}

   {/* `value` will be the parsed phone number in E.164 format.
   Example: "+12133734253". */}
  
    <PhoneInput
      placeholder="Phone Number"
      value={value}
      onChange={setValue} 
      id="demo_phone"
      error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
      />
<input placeholder="Company" id="demo_company"/> 
<div className="dropdown">
Which Information are you seeking?
    <select id="s1">
  
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
            <button id="demo_button" onClick={submit}> Request a Demo </button>

            {/* {showText ? <Text /> : null}  */}
            </div> 
           
<div className='Terms'>
          <p>By submitting you agree to our <a href='#'>Terms of Services</a> & <a href='#'>Privacy Policy</a></p>
            </div>
  </div>
  </>
  );
 
}
function submit() {
  var FirstName = document.getElementById("demo_FirstName");
  var LastName = document.getElementById("demo_LastName");
  var email = document.getElementById("demo_email");
  var phone = document.getElementById("demo_phone");
  var company = document.getElementById("demo_company");
 
 
  var s1 = document.getElementById("s1");
  
  
  var timestamp = String(new Date().getTime());
  const docdata = {
    FirstName: FirstName.value,
    LastName: LastName.value,
    email: email.value,
    phone: phone.value,
    company: company.value,
    

    s1: s1.value,
 timestamp:timestamp,
  };

  validateForm(docdata);
}

//form validation
function validateForm(docdata) {
  if (
    docdata.FirstName == "" ||
    docdata.LastName == "" ||
    docdata.email == "" ||
    docdata.phone == "" ||
    docdata.company == "" ||
    docdata.s1 == "" 
   )
    {
       alert("Please fill up the required fields.");
     

    }
    else if (docdata.phone.length != 10) {
    alert("phone number should be of length 10.");


  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(docdata.email)
  ) {
    alert("Please enter a valid email address.");

  } else {
    setInfo(docdata);
  }
}


//save to database
async function setInfo(docdata) {
  document.getElementById('demo_button').disabled = true
  document.getElementById('demo_button').style.backgroundColor = 'gray'
  // var timestamp = String(new Date().getTime());
  await setDoc(doc(db, "demo-form", docdata.timestamp), docdata);
  alert("Congratulations! Your information saved successfully.");
  deletedata();
  alert("hi");
  document.getElementById('demo_button').disabled = false
  document.getElementById('demo_button').style.backgroundColor = '#E9910DFC'
  // document.getElementById('form-back').click();
  Window.location.reload();
}
function deletedata(docdata)
{var FirstName = document.getElementById("demo_Firstname");
var LastName = document.getElementById("demo_LastName");
var company = document.getElementById("demo_company");
var phone = document.getElementById("demo_phone");
var email = document.getElementById("demo_email");
var s1 = document.getElementById("s1");
  FirstName.value=null;
  LastName.value=null;
  company.value=null;
  phone.value=null;
  email.value=null;
  s1.value="--Select any One--";
}
{/* const Text = () => <div className="submit-text">Thank you for requesting a Demo and providing us with some more context about you.



Our team will be in touch with you.



</div>; */}

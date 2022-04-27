
import { useState } from 'react';
import '../home/home.css'
const Contactus = () => {
const [status, setStatus] = useState('');
const sendForm = () => {
  setStatus('Form submitted!');
 
}
  return (
    <div className="container">
        <div className='row'>
        <div className='col-md-3 col-sm-3'>  &nbsp; &nbsp; </div>
        <div className=' col-md-6 col-sm-6'> 
            <div className="contact-wrapper">
                <h3>Contact Us</h3>
                <div className="input-wrapper">
                    <label>Email</label>
                    <input type='email' className="form-control" />
                </div>
                <div className="input-wrapper">
                    <label>Subject</label>
                    <input type='text' className="form-control" />
                </div>
                <div className="input-wrapper">
                    <label>Message</label>
                    <textarea rows="4" cols="50" name="comment" className="form-control"> </textarea>
                </div>
                <button className='btn btn-success' onClick={sendForm}>Send</button>
                <div >
                  <p>{status}</p>
                </div>
        </div>
      </div>
      <div className='col-md-3 col-sm-3'></div>
      </div>
    </div>
  );
};
export default Contactus;
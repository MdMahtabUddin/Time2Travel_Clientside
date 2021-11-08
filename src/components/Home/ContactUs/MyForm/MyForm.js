import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import useAuth from '../../../../hooks/useAuth';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const MyForm = () => {

    const { user } = useAuth();
    const { displayName, email } = user;

    const [formMsg, setFormMsg] = useState('');


    const handleFormSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            'service_rwhshis',
            'template_balengn',
            event.target,
            'user_MvFO6nIJvOd5zMjvsk7Ma'
        ).then(result => {
            console.log('result', result);
            setFormMsg('Thanks! We will get back to you as soon as possible.')
        }).catch(error => {
            console.log('error', error);
            setFormMsg(error)
        })
        event.target.reset();
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="form-floating mb-3 form-group">
                <input defaultValue={displayName} type="text" name="name" id="name" className="form-control" placeholder="Your Name " required />
                <label>Your name</label>
            </div>

            <div className="form-floating mb-3 form-group">
                <input defaultValue={email} type="text" name="user_email" id="user_email" className="form-control" placeholder="Your email address " required />
                <label>Your email</label>
            </div>

            <div className="form-floating mb-3 form-group">
                <input type="text" name="subject" id="subject" className="form-control" placeholder="Your Subject" required />
                <label className="text-secondary">Subject</label>
            </div>

            <div className="form-floating mb-3 form-group">
                <textarea type="text" name="message" className="form-control" id="your-message" cols="30" rows="10" placeholder="Your message" required></textarea>
                <label className="text-secondary">Your message</label>
            </div>
            <button className="btn custom-btn-style rounded-pill" type="submit">
                <FontAwesomeIcon icon={faPaperPlane} /> Send
            </button>

            <Fade top>
                <h4 className="mt-3 text-success">
                    {formMsg}
                </h4>
            </Fade>
        </form>
    );
};

export default MyForm;
import React, { useState, useEffect } from 'react'

const initialData = {
    fullname: "",
    email: "",
    phone: "",
    message: "",
} 

const Contact = () => {    
    const [contactData, setContactData] = useState(initialData)
    const [errors, setErrors] = useState({});
    const [submit, setSubmit] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setContactData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        setSubmit(true)
        const {fullname, email, phone, message} = contactData;
        if(fullname.length == 0)
            setErrors(prevState => ({...prevState, fullname: "Full name too short" }))
        if(!validateEmail(email))
            setErrors(prevState => ({...prevState, email: "Email invalid" }))
        if(!validatePhone(phone))
            setErrors(prevState => ({...prevState, phone: "Phone invalid" }))
        if(message.length == 0)
            setErrors(prevState => ({...prevState, message: "Message too short" }))
    }

    const checkError = (name) => {
        if( typeof errors[name] == 'undefined')
            return "";
        else
            return "error"
    }

    function validateEmail(email) {
        const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    }

    function validatePhone(phone){
        return /^\d+$/.test(phone);
    }

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    return (
        <section className="contact">
            <div className="container">
                <div className="contact__form">
                    <form action="" method="POST" onSubmit={(event) => handleSubmit(event)} className={submit && isEmpty(errors) ? "hide" : ""}>
                        <h1>Send me a message</h1>
                        <div className="input-field">
                            <input type="text" className={checkError("fullname")} name="fullname" placeholder="Full Name" value={contactData.name} onChange={(event) => handleChange(event)}/>    
                        </div>
                        <div className="input-field">
                            <input type="email" className={checkError("email")} name="email" placeholder="Email" value={contactData.email} onChange={(event) => handleChange(event)}/>    
                        </div>
                        <div className="input-field">
                            <input type="text" className={checkError("phone")} name="phone" placeholder="Phone (Optional)" value={contactData.phone} onChange={(event) => handleChange(event)}/>    
                        </div>
                        <div className="input-field">
                            <textarea rows="4" className={checkError("message")} name="message" placeholder="Your Message" value={contactData.message} onChange={(event) => handleChange(event)}></textarea>
                        </div>
                        <div className="input-submit">
                            <input type="submit" value="Send"/>
                        </div>
                    </form>
                    <div className={`successful-submission ${submit && isEmpty(errors) ? "" : "hide"}`}>
                        <h1>Form Successfully Submitted</h1>
                        <p>I will get back to you as soon as possible</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

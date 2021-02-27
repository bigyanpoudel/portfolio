import React from 'react'

const Contact = () => {
    return (
        <div className="Contact" id="contact">
             <div className="header__title grey">Contact</div>
             <h2>Have a question or want to work together?</h2>
             <form className="Contact__form">
                 <div className="Contact__form-group">
                 <input type="text" name="name" placeholder="Name" required/>
                 </div>
                 <div className="Contact__form-group">
                 <input type="email" name="email" placeholder="Email" required/>
                 </div>
                 <div className="Contact__form-group">
                 <textarea rows={5} cols={10} name="message" placeholder="message"/>

                 </div>

                 <button type="submit">Submit</button>
             </form>
        </div>
    )
}

export default Contact

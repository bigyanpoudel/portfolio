import React,{useEffect,useState} from 'react'
const defaultValue = {
    name:'',
    email:'',
    subject:'',
    message:''
}
const Contact = () => {
    const [data,SetData] = useState(defaultValue);
    const changeHandler = (e)=>{
        const {name,value} = e.target;
        SetData({...defaultValue,[name]:value});
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
    };


    const submitHandler = (e)=>{
        e.preventDefault();
        const submit =async()=>{
            const res = await fetch(`${process.env.CLIENT_URL}/send/email`,requestOptions);
            console.log(res);
        }
        submit();
    }
    return (
        <div className="Contact" id="contact">
             <div className="header__title grey">Contact</div>
             <h2>Have a question or want to work together?</h2>
             <form className="Contact__form" onSubmit={submitHandler}>
                 <div className="Contact__form-group">
                 <input type="text" name="name" placeholder="Name" required 
                 value={data.name}
                 onChange={changeHandler}/>
                 </div>
                 <div className="Contact__form-group">
                 <input type="email" name="email" placeholder="Email" required 
                 value={data.email}
                 onChange={changeHandler}/>
                 </div>
                 <div className="Contact__form-group">
                 <input type='text' name="subject" placeholder="Subject" required 
                 value={data.subject}
                 onChange={changeHandler}/>
                 </div>
                 <div className="Contact__form-group">
                 <textarea rows={5} cols={10} name="message" placeholder="message" 
                 value={data.message}
                 onChange={changeHandler}/>

                 </div>

                 <button type="submit">Submit</button>
             </form>
        </div>
    )
}

export default Contact

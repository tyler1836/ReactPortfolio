import React, {useState} from 'react';


function Contact(){
    const [email, setEmail] = useState(false)
    function renderForm(){
        if(email){
            return (<form action="https://getform.io/f/379da306-f55a-42c0-acd4-74d0dc094d72" method="POST" className=''>
            <input type="text" name="name" placeholder='Name' /> <br />
            <input type="email" name="email" placeholder='Email'/> <br />
            <input type="text" name="message" placeholder='message'/> <br />
           
            <button type="submit">Send</button>
            </form>)
        }
    
    }
    return(
        <aside>
            <ul>
                <li>Phone Number: 801-865-2842</li>
                <li>Email Me: <button onClick={() => setEmail(!email)} > tyler.r.roll@gmail.com</button></li>
          
            </ul>
          {renderForm()}
        </aside>
    )
}

export default Contact;
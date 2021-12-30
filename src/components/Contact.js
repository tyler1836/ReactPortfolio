import React, { useState } from 'react';
import Button from '@material-tailwind/react/Button';

function Contact() {
    const [email, setEmail] = useState(false)
    function renderForm() {
        if (email) {
            return (
                <div className='contact-form'>

                    <form action="https://getform.io/f/379da306-f55a-42c0-acd4-74d0dc094d72" method="POST" className=''>
                        <h2>Message Me</h2>
                        <div className='ic1'>
                            <input type="text" name="name" placeholder='Name' className='input' />
                            <input type="email" name="email" placeholder='Email' className='input' />
                        </div>
                        <div className='ic2'>
                            <input type="text" name="message" placeholder='message' className='input' />
                        </div>
                        <button type="submit" className='submit'>Send</button>
                    </form>
                </div>)
        }

    }
    return (
        <aside>
            <ul>
                <li>Phone Number: 801-865-2842</li>
                <Button color='lightBlue' buttontype='filled'
                    size='regular' rounded={false} block={false}
                    iconOnly={false} ripple='light'
                    onClick={() => setEmail(!email)} >
                    tyler.r.roll@gmail.com
                </Button>
                <a href="https://drive.google.com/file/d/1XZEWb74jD9pjG5si3p7zvNpuLuRfwh28/view?usp=sharing" target='_blank' rel='noopener noreferrer'>
                    <Button color='lightBlue' buttontype='filled'
                        size='regular' rounded={false} block={false}
                        iconOnly={false} ripple='light'>
                        Resume
                    </Button>
                </a>
            </ul>
            {renderForm()}
        </aside>
    )
}

export default Contact;
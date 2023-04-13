import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
const Contact =()=>{
    const [letterClass, setLetterClass] = useState("text-animate");
    const refForm =useRef()
    useEffect(() => {
        setTimeout(() => {
         return setLetterClass('text-animate-hover')
       }, 3000)
     }, [])
     const sendEmail =(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_swgt8xc', 'template_q9jp7zb', refForm.current, 'vTFWoNqGUamU_Caqd')
        .then(
                ()=>{
                    alert('Message sent!')
                    window.location.reload(false)
                },
                ()=>{
                    alert('Failed sending message, please try again')
                }


        )
    };

        
     
    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}
                        />
                </h1>
                <p>
                    I am curently looking for a 4 month Coop in 2023, I am interested to in Software Engineer/Developer intern role.
                    Please do not hesitate to contact me using the form below!

                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required/>
                                

                            </li>
                            <li className='half'>
                            <input
                                type="email"
                                name="email"
                                placeholder='Email'
                                required
                                />

                            </li>
                            <li>
                                <input placeholder='Subject' type="text" name='subject' required />

                            </li>
                            <li>
                                <textarea placeholder='Message' Name="message" required></textarea>

                            </li>
                            <li>
                                <input type="submit" className='flat_button' value="SEND" />

                            </li>
                        </ul>


                    </form>


                </div>


            </div>




        </div>
        
        
        
        <Loader type="pacman" />
        
        </>


    )



}

export default Contact
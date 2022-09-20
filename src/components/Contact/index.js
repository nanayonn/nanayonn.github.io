import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailJs from '@emailjs/browser'
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
        emailJs.sendForm('service_swgt8xc', 'template_p1m5h3r', refForm.current, 'vTFWoNqGUamU_Caqd')
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
                    I am curently looking for Winter Coop in 2022, espiecally for Software Engineer intern and QA testing intern. 
                    Please do not hesitate to contact me uisng the form below!

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
                                <input type="submit" className='flat-button' value="SEND" />

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
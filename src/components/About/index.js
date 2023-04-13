import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faCuttlefish, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { faHryvnia } from '@fortawesome/free-solid-svg-icons';
import {Loader} from 'react-loaders';
import { Button} from 'react-bootstrap';
import ExampleDoc from '../../assets/images/Waterloo.png'
const About= () =>{
    
    const [letterClass, setLetterClass] = useState("text-animate");
    
    useEffect(() => {
        setTimeout(() => {
         return setLetterClass('text-animate-hover')
       }, 3000)
     }, [])
return(
    <>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                        />
            </h1>
            <p>My name is Han and I am currently a student at the University of Waterloo studying Computer Engineering.
                 I am currently seeking a Software Development Engineer (SDE) co-op role that will allow me to work on diverse projects and learn from other talented professionals.
            </p>
            <p> Throughout my academic journey, I have developed a passion for programming and have become proficient in several programming languages such as C++, Java and Javascript. 
                I have also acquired a solid foundation in computer science principles and techniques, including algorithms, data structures, and software design.

            </p>
            <p>
            What sets me apart from others is my diligence and my ability to learn new skills quickly. I have always been a fast learner, and I am not afraid to take on new challenges. I am constantly seeking new opportunities to grow and expand my knowledge base.
In addition, I am eager to learn and collaborate with other professionals in the field.
            </p>
            <p>If you are looking for a motivated and talented co-op student with a passion for programming, then look no further. I would love the opportunity to contribute my skills and knowledge to your team. Thank you for taking the time to read my about me page, and I look forward to hearing from you soon! You can find my resume down below, thank you!
            </p>

        
           

<a href={ExampleDoc} download="MyExampleDoc" target='_blank'>
   <Button className='download-button'>My Example Doc</Button>
</a>
       
        </div>
    <div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faCuttlefish} color="#DD0031" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faReact} color="#28A4D9" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faAngular} color="#EC4" />
                </div>
            </div>
        </div>
    </div>
    </div>
    <Loader type="pacman"/>
    </>
)


}

export default About
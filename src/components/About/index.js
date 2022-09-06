import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faCuttlefish, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { faHryvnia } from '@fortawesome/free-solid-svg-icons';

const About= () =>{
    
    const [letterClass, setLetterClass] = useState("text-animate");
    
    useEffect(() => {
        setTimeout(() => {
         return setLetterClass('text-animate-hover')
       }, 3000)
     }, [])
return(
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                        />
            </h1>
            <p>I'm a student at University of Waterloo studying Computer Engineering looking for a tech coop role in
                with the opportunity to work on diverse projects and learn from other talents. 
            </p>
            <p> I'm dilligent, able to learn new skills fast, and eager to learn

            </p>
            <p>
                You can find my resume down below, thank you!
            </p>

        </div>
    <div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faCuttlefish} color="#DD0031" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faReact} color="#DD0031" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faJsSquare} color="#DD0031" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color="#DD0031" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                </div>
            </div>
        </div>
    </div>
    </div>

)


}

export default About
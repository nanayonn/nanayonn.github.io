import { Link } from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import Logo from "../../assets/images/Heiseliuding.jpg";
const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["H", "a", "n", "p", "e", "n", "g"];

  useEffect(() => {
     setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <span className={`${letterClass} _15`}>&nbsp;</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={16}
          />
          <br />
        </h1>
        <h2>Computer Engeineering Student at University of Waterloo</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;

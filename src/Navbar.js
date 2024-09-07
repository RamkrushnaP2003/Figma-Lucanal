import { useState } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function Navbar() {
    const [showInfo, setShowInfo] = useState("about");

    const handleOnClick = (section) => {
        setShowInfo(section);
    }

    const styles = {
        color: "#FFFFFF",
        cursor: "pointer",
        backgroundColor: "#28292F",
        borderRadius: "1rem",
        boxShadow: "0 5px 30px 8px rgba(0, 0, 0, 1)",
    }

    return (
        <>
            <div className='navbar mt-3'>
                <span className='h-6 w-6 mt-3 absolute question'><HelpOutlineIcon/></span>
                <div className="flex justify-between px-8 relative py-2 items-center leading-10">
                    <h3 className="text-base" style={showInfo === "about" ? styles : {}} onClick={() => handleOnClick("about")}>About Me</h3>
                    <h3 className="text-base" style={showInfo === "experience" ? styles : {}} onClick={() => handleOnClick("experience")}>Experiences</h3>
                    <h3 className="text-base" style={showInfo === "recomended" ? styles : {}    } onClick={() => handleOnClick("recomended")}>Recomended</h3>
                </div>
            </div>

            {showInfo === "about" && (
                <div className="px-2 py-4 mt-4 bg-gray-100 max-h-48 overflow-y-auto custom-scrollbar">
                    <p>
                        Thank You for this opportunity and I'm final year <b>Computer Science Engineering (CSE)</b> student pursuing btech from <b>Bharat-Ratna Indira Gandi Collage Of Engineering</b>.
                        <br></br>I am highly skilled in <b>React.js</b> and have a solid understanding of <b>Java with DSA</b>. Over the past summer, I dedicated my time to exploring and learning React.js through hands-on experience, completing several projects using this technology. These projects enhanced my ability to develop responsive, user-friendly web applications.
                        <br/>
                        Given that your company is looking for talent in these areas, I believe my skills and experience make me an ideal candidate for this role. I am eager to apply my knowledge, contribute to impactful projects, and continue growing in a professional environment.
                    </p>
                </div>
            )}

            {showInfo === "experience" && (
                <div className="px-2 py-4 mt-4 bg-gray-100 max-h-48 overflow-y-auto custom-scrollbar">
                    <p><b>AirBnB : HTML | CSS | JavaScript | Node.js | Express.js | MongoDB</b><br/>
• Developed AirBnB Website, an online marketplace for short-and-long-term homestays and experiences in various<br/>
countries and regions. It is build using HTML, CSS, JavaScript, Express.js, Node.js, MongoDB.<br/>
• Architected the backend using the MVC(Mode, View, Control) pattern ensure clean, maintainable and scalable code.<br/>
• Used Mapbox API to access the live location of the House / Villa.<br/>
• Additional implemented Review and Rating so that users should be able to provide textual feedback and rate 1 – 5
stars indicate their overall satisfaction<br/><br/>
<b>Weather Widget : ReactJS | Material UI</b><br/>
• Developed weather widget website is a web application that display real time-time weather information for the specific
location.<br/>
• Used Material UI to design website making it easier reason to about the UI and user-friendly interface<br/>
• Used OpenWeatherMap API for displaying the current information about weather like Temperature, Humidity, etc.<br/><br/>
    <b>SimonSays Game : HTML | CSS | JavaScript</b><br/>
•Advanced SimonSays is a classical memory game where player must repeat a series of colored light in the
correct order. It is a web app version of game can built using the web technologies : HTML, CSS, JavaScript.<br/>
•Defines specific color for each button to match-sequence of colored buttons.<br/>
•This game generates random color sequence and controlling flashing of light.<br/></p>
                </div>
            )}   

            {showInfo === "recomended" && (
                <div className="px-2 py-4 mt-4 bg-gray-100 max-h-48 overflow-y-auto custom-scrollbar">
                    <p><a href='https://github.com/RamkrushnaP2003'>follow this github</a></p>
                </div>
            )}   
        </>
    )
}
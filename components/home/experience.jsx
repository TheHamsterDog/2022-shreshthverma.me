
import React from 'react';

let workExperience = [{
    name: "Intentionally Designed Solutions",
    position: "Full Stack Developer",
    timeFrame: "September 2021 — August 2022",
    description: "Developed Ethereum Smart Contracts, integrated them using web3.js, and Developed Full Stack Websites using technologies such as Svelte, Koa, MongoDB, and TailwindCSS.",
    link: "https://ids.company/"
},
{
    name: "Hub Alfa",
    position: "Full Stack Web Developer",
    timeFrame: "Since March 2021, Part Time",
    description: "Developed, Deployed, and Maintained four full stack websites using technologies including React, Node.js, Express, MongoDB, and SCSS",
    link: "https://www.focus50.today/"

}
]

let initiatives = [{
    name: "The Extra Quadrata Tech Fest",
    position: "One of the four Core Organizer",
    timeFrame: "July 2022 — Present",
    description: `The Extra Quadrata Tech Fest is the first tech fest hosted by DPS Kolar. It is also one of the first entirely student run tech fests in Bhopal. I developed the event's website using technologies such as Next.js, SCSS, and MongoDB, conceptualized the tech fest, installed necessary software,
                  prepared machines, wrote proposals, created promotional material(such as brochures), created budget sheets, managed the organizing team,
                  recruited the team, the comparers, and volunteers, developed certificates, conducted meetings, and handled other managerial responsibilities.`,
    link: "https://extraquadrata.dpskolar.org"
},
{
    name: "Kolar Chronicles",
    position: "Co-Founder, CO-CEO, and CTO",
    timeFrame: "Since August 2022",
    description: `Kolar Chronicles is the first student run newspaper, by and for the students of DPS Kolar Road Bhopal. I am currently developing its website using technologies such as Next.js, SCSS, and MongoDB. I am also responsible for managing the team, recruiting the team, and editing, writing and checking articles.`
},
{
    name: "PurseX",
    position: "Co-founder, CO-CEO, and CTO",
    timeFrame: "September 2021 — December 2021",
    description: `PurseX was a payment wallet with integrated stock and crypto markets. I created a sandbox version of the purseX mobile app using technologies such as React Native, Node.js, Express.js, and MongoDB. Recruited and managed the team, as well as testers.`,
    link: "https://github.com/orgs/PURSE-X"
},
{
    name: "Elect.io",
    position: "Founder, CEO, and CTO",
    timeFrame: "Since June 2022",
    description: "Electio strives to help the masses vote in a more educated way; I developed the website using Node.js, express, mongoDB, React, etc, entered political data into the database, and recruited and managed the team.",
    link: "https://electio-v4sys.ondigitalocean.app/"
}
]

let studentGovernment = [{
    name: "Student Council, DPS Kolar ",
    position: "Senior Cyber Director",
    timeFrame: "2021-2023",
    description: "Produced video, image, and promotional content for the school, helped teachers and students with technological issues, and maintained discipline on the school campus. "
},
{
    name: "Techno Club, DPS Kolar Road Bhopal",
    description:"Organized the club, helped members create their projects, gave presentations to get students interested in STEM, and taught and mentored students",
    timeFrame: "2021-2023",
    position: "President"
},
]

const Each = (props) => {
    let item = props.item;
    let [expanded, setExpanded] = React.useState(false);
    return (<div style={{ transition: "0.3s all" }} onClick={() => setExpanded(!expanded)} className='home-experience-container-each-item'>
        <a target="__blank__" className='home-experience-container-each-item-link' href={item.link}>
            <h3 className='home-experience-container-each-item-title'>
                {item.name}
            </h3>
        </a>
        <h4 className='home-experience-container-each-item-position'>
            {item.position}
        </h4>
        {expanded ? <div className='home-experience-container-each-item-in'>

            <h5 className='home-experience-container-each-item-time'>{item.timeFrame}</h5>

            <p className='home-experience-container-each-item-description'>{item.description}</p>
        </div> : null}
    </div>)
}
const Experience = () => {
    const [state, setState] = React.useState(0);
    const [expand, setExpanded] = React.useState(0);
    return (<div className='home-experience'>
        <div className="home-experience-container">

            <input type="radio" checked={state === 0} name='selector' onChange={(e) => {
                setState(Number(e.target.value));
            }} value={0} id="Work"></input>
            <input type="radio" name='selector' checked={state === 1} onChange={(e) => {
                setState(Number(e.target.value));
            }} value={1} id="Initiatives"></input>
            <input type="radio" name='selector' id="Student" checked={state === 2} onChange={(e) => {
                setState(Number(e.target.value));
            }} value={2}></input>
            <div className="home-experience-container-title">
                <div className='home-experience-container-title-underline'>

                </div>
                <label htmlFor='Work'>Professional </label>

                <label htmlFor='Initiatives'>Initiatives</label>
                <label htmlFor='Student'>Student Gov and Clubs</label>
            </div>
            <div className='home-experience-container-each'>
                <h2 className='home-experience-container-each-title'>
                    Professional Experience
                </h2>
                <p className='home-experience-container-each-paragraph'>
                    I have been working professionally as a full stack developer since the March of 2021. Primarily, I have worked for two businesses.
                </p>
                <div className='home-experience-container-each-items'>
                    {workExperience.map((item, index) => {

                        return <Each item={item} key={`${item.name}-${index}`} />

                    })}
                </div>


            </div>
            <div className='home-experience-container-each'>
                <h2 className='home-experience-container-each-title'>
                    Initiatives
                </h2>
                <p className='home-experience-container-each-paragraph'>
                    One of my crucial goals in life is to leave a positive impact on this planet by spurring education, by striving to abate discrimination, and by allowing people to freely voice their opinions. This section includes all the initiatives I have founded or co-founded.
                </p>
                <div className='home-experience-container-each-items'>
                    {initiatives.map((item, index) => {
                        return <Each item={item} key={`${item.name}-${index}`} />
                    })}
                </div>
            </div>
            <div className='home-experience-container-each'>
                <h2 className='home-experience-container-each-title'>
                    Student Government
                </h2>

                <div className='home-experience-container-each-items'>
                    {studentGovernment.map((item, index) => {
                        return <Each item={item} key={`${item.name}-${index}`} />
                    })}
                </div>
            </div>
        </div>
    </div >)
}

export default Experience;
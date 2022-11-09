
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
    description: `Developed the event's website using technologies such as Next.js, SCSS, and MongoDB. Conceptualized the tech fest. Installed necessary software,
                  prepared machines, Wrote proposals, created promotional material(such as brochures), created budget sheets, managed the organizing team,
                  recruited the team, the comparers, and volunteers, developed certificates, conducted meetings, and handled other managerial responsibilities.`,
    link: "https://extraquadrata.dpskolar.org"
},
{
    name: "Kolar Chronicles",
    position: "Co-Founder, CO-CEO, and CTO",
    timeFrame: "Since August 2022",
    description: `Currently developing the website using technologies such as Next.js, SCSS, and MongoDB. Responsible for developing the website, managing the team, and recruiting the team. 
    Also responsible for editing, writing and checking articles. 
    `
},
{
    name: "PurseX",
    position: "Co-founder, CO-CEO, and CTO",
    timeFrame: "September 2021 — December 2021",
    description: `Created a sandbox version of the purseX mobile app using technologies such as React Native, Node.js, Express.js, and MongoDB. Recruited and managed the team, as well as testers.`,
    link: "https://github.com/orgs/PURSE-X"
},
{
    name: "Elect.io",
    position: "Founder, CEO, and CTO",
    timeFrame: "Since June 2022",
    description:"Helping the masses vote in a more educated way; developed the website using Node.js, express, mongoDB, React, etc; entered political data into the database; and recruited and managed the team.",
    link:"https://electio-v4sys.ondigitalocean.app/"
}
]

let studentGovernment = [{
    name: "Student Council, DPS Kolar 2021-2022",
    position: "Senior Cyber Director"
},
{
    name: "Student Council, DPS Kolar 2022-2023",
    position: "Senior Cyber Director"
},
]

const Experience = () => {
    const [state, setState] = React.useState(0);
    const [expand, setExpanded] = React.useState(0);
    return (<div className='home-experience'>
        <div className="home-experience-container">
            <div className="home-experience-container-title">
                <label htmlFor='Work'>Professional</label>
                <label htmlFor='Initiatives'>Initiatives</label>
                <label htmlFor='Student Government'>Student Government</label>
            </div>
            <input type="checkbox" id="Work"></input>
            <input type="checkbox" id="Initiatives"></input>
            <input type="checkbox" id="Student Government"></input>
            <div className='home-experience-container-each'>
                <h2 className='home-experience-container-each-title'>
                    Professional Experience
                </h2>
                <p className='home-experience-container-each-paragraph'>
                    I have been working professionally as a full stack developer since the March of 2021. Primarily, I have worked for two businesses.
                </p>
                <div className='home-experience-container-each-item'>
                    {workExperience.map((item, index) => {
                        return

                    })}
                    <h3 className='home-experience-container-each-item-title'>

                    </h3>
                </div>
            </div>
        </div>
    </div>)
}

export default Experience;
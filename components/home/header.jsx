import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const Timer = () => {
    const date = new Date('October 21, 2004 11:00:00 GMT');
    const d1 = new Date(Date.now());

    const d2 = d1 - date;
    console.log(new Date(d2));
    const [state, setState] = React.useState(new Date(d2));
    React.useEffect(() => {

        setInterval(() => {
            const d1 = new Date();
            const d2 = d1 - date;
            setState(new Date(d2));

        }, 1000)
    }, [])
    return (
        <div className="home-header-container-timer">
            <div className="home-header-container-timer-time">
                <h3>{state.getFullYear() - 1970}</h3>
                <h3>{(state.getMonth()).toString().length === 1 ? "0" + (state.getMonth()) : (state.getMonth())}</h3>
                <h3>{(state.getDate()).toString().length === 1 ? "0" + (state.getDate()) : (state.getDate())}</h3>
                <h3>{(state.getHours()).toString().length === 1 ? "0" + (state.getHours()) : (state.getHours())}</h3>
                <h3>{(state.getMinutes()).toString().length === 1 ? "0" + (state.getMinutes()) : (state.getMinutes())}</h3>
                <h3>{(state.getSeconds()).toString().length === 1 ? "0" + (state.getSeconds()) : (state.getSeconds())}</h3>
            </div>
            <div className="home-header-container-timer-labels">
                <h3>Years</h3>
                <h3>Months</h3>
                <h3>Days</h3>
                <h3>Hours</h3>
                <h3>Minutes</h3>

                <h3>Seconds</h3>
            </div>

        </div>)
}
const Header = () => {

    return (<section suppressHydrationWarning className="home-header">

        <div suppressHydrationWarning className="home-header-cover-container"><video className="home-header-cover" src="/home/cover.mp4" autoPlay muted></video></div>
        <div suppressHydrationWarning className="home-header-container">

            <img className="home-header-container-photo" src="/home/image-2.jpg" />
            <h1 className="home-header-container-title">
                Shreshth Verma
            </h1>
            <h2 className="home-header-container-subtitle">
                A Full Stack Developer, a perpetual student and an entrepreneur
            </h2>
            <p className="home-header-container-paragraph">
                I am a perpetual student, an entrepreneur, and an Experienced Full Stack Developer with a demonstrated history of working in the industry. I am currently pursuing a High School Diploma focused in PCM + IP from Delhi Public School, Kolar Road, Bhopal.
            </p>
            <h2 className="home-header-container-subtitle">I have been alive for</h2>
            <Timer />
            <button className='home-header-container-scroll'><ArrowDownwardIcon className='home-header-container-scroll-icon' /></button>
        </div>
        <img className="home-header-photo" src="/home/Subject.png" />
    </section>)
}

export default Header;
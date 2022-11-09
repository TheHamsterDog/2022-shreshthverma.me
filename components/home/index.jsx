import Header from './header';
import Experience from './experience';
const Home = () => {
    return (
        <div suppressHydrationWarning className="home">
            <Header />
            <Experience />
        </div>
    )
}

export default Home;
import './Home.css'
import videoHomePage from "../../assets/video-homePage.mp4"

const Home = (props) => {
    return (
        <div className="content-home">
            <video autoPlay muted loop width="100%" className='video-home'>
                <source src={videoHomePage} type="video/mp4" />
            </video>
        </div >
    )
}

export default Home
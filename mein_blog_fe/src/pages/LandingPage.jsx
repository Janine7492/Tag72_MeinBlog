import "./LandingPage.css"
import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <section className="landingPage">
            <h2 className="headlineLanding">Willkommen auf Pauls Blog</h2>
            <Link className="btnLanding" to="/blog">Los geht's </Link>
        </ section>
    )
};

export default Landing;
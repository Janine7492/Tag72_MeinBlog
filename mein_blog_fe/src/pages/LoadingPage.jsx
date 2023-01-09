import "./LoadingPage.css"
import { Link, useParams } from "react-router-dom"

const Loading = () => {

    const { direction } = useParams();

    return (
        <section className="loadingPage">
            <h3 className="headlineLoading">Hast du Admin-Rechte?</h3>
            <div>
                <Link className="btn" to="/blog">Nein</Link>
                <Link className="btn" to={`/edit/${direction}`}>Ja</Link>
            </div>
        </ section>
    )
};

export default Loading;
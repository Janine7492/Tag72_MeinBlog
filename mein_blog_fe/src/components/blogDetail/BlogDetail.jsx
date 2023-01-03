import "./BlogDetail.css"
import { Link, useParams } from "react-router-dom";


const BlogDetail = (props) => {

    let params = useParams();
    console.log(params.id);

    let id = params.id;

    // const [posts, setPosts] = useState([]);

    // console.log(posts);

    // useEffect(() => {
    //     fetch('http://localhost:9898/blog')
    //         .then(response => response.json())
    //         .then(data => setPosts(data))
    // }, [id]);

    return (
        <>
            <Link to="/blog" className="backBtn" >Zurück zum Blog</Link>
            <section className="topSecDetail">
                <img src={`http://localhost:9898/${props.posts[id].picture}`} alt={props.posts[id].title} />
                <h2>{props.posts[id].title}</h2>
            </section>
            <section className="lowerSecDetail">
                <p>{props.posts[id].text}</p>
            </section>
        </>
    )
};

export default BlogDetail;
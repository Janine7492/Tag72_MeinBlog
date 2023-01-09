import "./BlogDetail.css"
import { Link, useParams } from "react-router-dom";


const BlogDetail = (props) => {

    let params = useParams();
    let id = params.id;

    let index = props.posts.findIndex((post) => post.id === id);


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
                <img src={`http://localhost:9898/${props.posts[index].picture}`} alt={props.posts[index].title} />
                <h2>{props.posts[index].title}</h2>
            </section>
            <section className="lowerSecDetail">
                <p>{props.posts[index].text}</p>
            </section>
        </>
    )
};

export default BlogDetail;
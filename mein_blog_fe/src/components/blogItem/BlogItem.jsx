import { Link } from "react-router-dom";


const BlogItem = (props) => {



    return (
        <>
            <section className="blogItem">
                <img src={`http://localhost:9898/${props.image}`} alt={props.title} />
                <h2>{props.title}</h2>
                <Link to={`/detail/${props.id}`} >Lies mehr</Link>
            </section>
        </>
    )
};

export default BlogItem;
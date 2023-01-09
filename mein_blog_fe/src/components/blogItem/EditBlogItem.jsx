import { Link } from "react-router-dom";
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';


const EditBlogItem = (props) => {


    function deletePost() {
        fetch(`http://localhost:9898/blog/edit/${props.id}`, {
            method: "delete",
        })
            .then((res) => res.json())
            .then((data) => {
                props.setPosts(data)
            })
        console.log("Delete ausgeführt", props.id);
    }

    // onClick={deletePost}

    return (
        <>
            <section className="blogItem">
                <img src={`http://localhost:9898/${props.image}`} alt={props.title} />
                <h2>{props.title}</h2>
                <Link to={`/detail/${props.id}`} >Lies mehr</Link>
                <Link to={`/edit/${props.id}`}><FaPencilAlt /></Link>
                <button type="button" onClick={deletePost} ><FaTrashAlt /></button>
            </section>
        </>
    )
};

export default EditBlogItem;
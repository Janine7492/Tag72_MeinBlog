import "./BlogAdd.css";
import { Link } from "react-router-dom";

const BlogAdd = (props) => {
    const sendData = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        fetch('http://localhost:9898/blog', {
            method: 'POST',
            body: form
        })
            .then(response => response.json())
            .then(data => props.setPosts(data))
    }
    return (
        <>

            <form onSubmit={sendData} className="addForm">
                <input type="text" name="title" placeholder="Gib deinem Post einen Titel"></input>
                <textarea className="inputText" type="textarea" name="text" placeholder="Schreibe hier den Text für deinen Post"></textarea>
                <input type="file" name="image" ></input>
                <input className="submitBtn" type="submit" value="Veröffentlichen"></input>
            </form>
            <Link to="/blog" className="backBtn">Zurück zum Blog</Link>
        </ >
    )
}

export default BlogAdd;
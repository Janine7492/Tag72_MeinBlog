import "./BlogAdd.css";
import { Link } from "react-router-dom";
// import BlogItem from "../blogItem/BlogItem";
// import { useState } from "react";

const BlogAdd = (props) => {

    // const [titleInput, setTitleInput] = useState("");
    // const [textInput, setTextInput] = useState("");

    const sendData = (e) => {
        // e.preventDefault()
        const form = new FormData(e.target)
        console.log(form);
        fetch('http://localhost:9898/blog', {
            method: 'POST',
            body: form
        })
            .then(response => response.json())
            .then(data => props.setPosts(data))

        document.getElementById("titleInp").value = "";
        document.getElementById("textInp").value = "";
        document.getElementById("picInp").value = "";
    }




    return (
        <>

            <form onSubmit={sendData} className="addForm">
                <input type="text" name="title" placeholder="Gib deinem Post einen Titel" id="titleInp" ></input>
                <textarea className="inputText" type="textarea" name="text" placeholder="Schreibe hier den Text für deinen Post" id="textInp" ></textarea>
                <input type="file" name="image" id="picInp"></input>
                {/* <input type="text" name="id" value={uidNo} disabled={true} id="id" /> */}
                <input className="submitBtn" type="submit" value="Veröffentlichen"></input>
            </form>

            <Link to="/blog" className="backBtn">Zurück zum Blog</Link>
        </ >
    )
}

export default BlogAdd;
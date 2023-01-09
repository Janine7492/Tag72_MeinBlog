import "../../components/blogList/BlogList.css";
import { Link } from "react-router-dom";
import EditBlogList from "../../components/blogList/EditBlogList.jsx"
// import { useEffect, useState } from "react";


const EditorBlogPage = (props) => {
    console.log("props EditorBlogPage: ", props);
    console.log(props.posts);

    return (
        <>
            <Link to="/loading/add" className="backBtn">Blogbeitrag hinzufügen</Link>
            <section>
                <h1 className="headlineBlog">Pauls Blog</h1>
                <p className="descrBlog">Willkommen  <span className="big">ADMIN</span> </p>
            </section>
            <section >
                <EditBlogList setPosts={props.setPosts} posts={props.posts} />
            </section>

        </>
    )
};

export default EditorBlogPage;
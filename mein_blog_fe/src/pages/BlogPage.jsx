import "../components/blogList/BlogList.css";
import { Link } from "react-router-dom";
import BlogList from "../components/blogList/BlogList.jsx"


const BlogPage = (props) => {
    return (
        <>
            <Link to="/loading" className="backBtn">Blogbeitrag hinzufügen</Link>
            <section>
                <h1 className="headlineBlog">Pauls Blog</h1>
                <p className="descrBlog">Meine Stadt, mein Bezirk, mein Viertel, meine Gegend, meine Straße, mein Zuhause mein <span className="big">BLOG</span> </p>
            </section>
            <section >
                <BlogList setPosts={props.setPosts} posts={props.posts} />
            </section>

        </>
    )
};

export default BlogPage;
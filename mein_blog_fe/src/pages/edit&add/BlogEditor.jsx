import "./BlogEditor.css"
import BlogAdd from "../../components/blogAdd/BlogAdd.jsx"

const BlogEditor = ({ setPosts, posts }) => {
    return (
        <section className="editorPage">
            <h2 className="headlineEditor">Erstelle neue Blogeinträge</h2>
            <BlogAdd setPosts={setPosts} posts={posts} />
        </ section>
    )
};

export default BlogEditor;
import "./BlogEditor.css"
import BlogAdd from "../../components/blogAdd/BlogAdd.jsx"

const BlogEditor = ({ setPosts }) => {
    return (
        <section className="editorPage">
            <h2 className="headlineEditor">Erstelle neue Blogeinträge</h2>
            <BlogAdd setPosts={setPosts} />
        </ section>
    )
};

export default BlogEditor;
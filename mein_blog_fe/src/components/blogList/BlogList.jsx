import BlogItem from "../blogItem/BlogItem.jsx";

const BlogList = (props) => {


    return (
        <div className="postListWrapper">
            {props.posts.map((post) => <BlogItem key={post.id} title={post.title} image={post.picture} id={post.id} />)}
        </div>
    )
};

export default BlogList;
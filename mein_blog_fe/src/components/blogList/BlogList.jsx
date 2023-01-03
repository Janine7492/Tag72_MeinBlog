import BlogItem from "../blogItem/BlogItem.jsx"

const BlogList = (props) => {


    return (
        <div className="postListWrapper">
            {props.posts.map((post, index) => <BlogItem key={index} title={post.title} image={post.picture} index={index} />)}
        </div>
    )
};

export default BlogList;
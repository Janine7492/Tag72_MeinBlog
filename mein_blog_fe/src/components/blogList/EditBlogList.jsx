import EditBlogItem from "../blogItem/EditBlogItem.jsx"

const BlogList = (props) => {

    console.log("Props EditBlogItem: ", props);

    return (
        <div className="postListWrapper">
            {props.posts.map((post) => <EditBlogItem key={post.id} title={post.title} image={post.picture} id={post.id} setPosts={props.setPosts} />)}
        </div>
    )
};

export default BlogList;
import EditBlogItem from "../blogItem/EditBlogItem.jsx"

const BlogList = (props) => {

    console.log("Props EditBlogItem: ", props);

    // function deletePost(setPosts) {
    //     fetch(`http://localhost:9898/blog/edit/${id}`, {
    //         method: "delete",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setPosts(data)
    //         })
    // }

    return (
        <div className="postListWrapper">
            {props.posts.map((post) => <EditBlogItem key={post.id} title={post.title} image={post.picture} id={post.id} setPosts={props.setPosts} />)}
        </div>
    )
};

export default BlogList;
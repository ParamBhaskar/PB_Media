const PostList = ({ posts, title, username, handleEdit, handleDelete, func_like, func_dislike }) => {
    return (
        <div>
            <h2>{title} {username}!</h2>
            <div className="post-list">
                {posts.map((post) => (
                    <div className="post-preview" key={post.id}>
                        <h2>{post.title}</h2>
                        <div className="box">
                        <button onClick={() => handleEdit(post.id)} className="btn btn-info btn-lg b1">
                            <span className="glyphicon glyphicon-pencil"></span> Edit
                        </button>
                        <button onClick={() => handleDelete(post.id)} className="btn btn-info btn-lg b2">
                            <span className="glyphicon glyphicon-trash"></span> Delete
                        </button>
                        </div>
                        <button className="b3" onClick={() => func_like(post.id)}>
                            <span className="glyphicon glyphicon-thumbs-up"></span> {post.numlike}
                        </button>
                        <button className="b4" onClick={() => func_dislike(post.id)}>
                            <span className="glyphicon glyphicon-thumbs-down"></span> {post.numDislike}
                        </button>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default PostList;
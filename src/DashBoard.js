import { useState } from "react";
import PostList from "./PostList";
var id = 0;
const DashBoard = () => {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [rendered, setRendered] = useState(false);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setisEdititem] = useState(null);

    const handleDelete = (id) => {
        if (window.confirm("Do you want to delete your post?")) {
            const newPosts = posts.filter(post => post.id !== id);
            setPosts(newPosts);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title !== "") {
            if (toggleSubmit === true) {
                ++id;
                const post = { title: title, id: id, numlike: 0, numDislike: 0 };
                posts.push(post);
                setPosts(posts);
                setTitle('');
                console.log(posts);
            }
            else if (toggleSubmit === false) {
                posts.map((post) => {
                    if (post.id === isEditItem) {
                        post.title = title;
                    }
                })
                setPosts(posts);
                setTitle('');
                setToggleSubmit(true);
                console.log(posts);
            }
        }
    }

    const handleEdit = (id) => {
        if (window.confirm("Do you want to edit your post?")) {
            let newEditItem = posts.find((post) => {
                return post.id === id;
            })
            setToggleSubmit(false);
            setTitle(newEditItem.title);
            setisEdititem(id);
        }
    }

    const func_like = (id) => {
        const newPosts = posts.filter(post => post.id === id);
        let index = posts.indexOf(newPosts[0]);
        if (newPosts[0].numlike === 0) {
            newPosts[0].numlike = 1;
            newPosts[0].numDislike = 0;
            document.getElementsByClassName("b3")[index].style.background = "green";
            document.getElementsByClassName("b4")[index].style.background = "#24a0ed";
        }
        else if (newPosts[0].numlike === 1) {
            newPosts[0].numlike = 0;
            document.getElementsByClassName("b3")[index].style.background = "#24a0ed";
        }
        setRendered(!rendered);
    }

    const func_dislike = (id) => {
        const newPosts = posts.filter(post => post.id === id);
        let index = posts.indexOf(newPosts[0]);
        if (newPosts[0].numDislike === 0) {
            newPosts[0].numDislike = 1;
            newPosts[0].numlike = 0;
            document.getElementsByClassName("b4")[index].style.background = "red";
            document.getElementsByClassName("b3")[index].style.background = "#24a0ed";
        }
        else if (newPosts[0].numDislike === 1) {
            newPosts[0].numDislike = 0;
            document.getElementsByClassName("b4")[index].style.background = "#24a0ed";
        }
        setRendered(!rendered);
    }
    return (
        <div className="dashboard">
            <form>
                <textarea
                    rows={10} cols={75}
                    placeholder="Type your post..."
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {toggleSubmit ? <button onClick={handleSubmit}>Share</button> : <button onClick={handleSubmit}>Edit</button>}
            </form>
            <PostList posts={posts} title="All Posts By" username="Paramananda Bhaskar" handleEdit={handleEdit} handleDelete={handleDelete} func_like={func_like} func_dislike={func_dislike} />
        </div>
    );
}

export default DashBoard;
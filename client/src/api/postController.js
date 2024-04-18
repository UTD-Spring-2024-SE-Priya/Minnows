import { useState } from 'react';
import { supabase } from "../db/supabase";



export default function postController() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({ title: "", content: ""});
    const emptyAlert = "Please enter a title and some text for the post.";

    async function fetchPosts() {
        const { data } = await supabase.from('posts').select('*');
        setPosts(data);
    };

    async function submitPost({ title, content }) {
        if (!title.trim() || !content.trim()) {
            alert(emptyAlert);
            return (emptyAlert);
        }

        try {
            const { data, error } = await supabase
                .from('posts')
                .insert([{ title: title, body: content }]).single();
            setPost({ title: "", content: "" });
            fetchPosts();

            if (error) {
                throw error;
            }

            if (data) {
                alert("Post created successfully!");
                setPost({ title: "", content: "" });
                fetchPosts();
            }
        } catch (error) {
            alert(`Error creating post: ${error.message}`);
            fetchPosts();
        }
    };
}

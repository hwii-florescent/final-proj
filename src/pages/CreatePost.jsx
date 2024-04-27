import React from 'react';
import { useState } from 'react';
import './CreatePost.css'

import { supabase } from '../client';


function CreatePost() {

    const [posts, setPosts] = useState({title: "", content: "", img_url: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPosts( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createPost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Hub')
          .insert({title: posts.title, content: posts.content, img_url: posts.img_url})
          .select();
      
        window.location = "/";
      };

    return (
        <div>
            <form>
                <label for="title">Post Title</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange} /><br />
                <br/>

                <label for="content">Post Content</label><br />
                <input type="text" id="content" name="content" onChange={handleChange} /><br />
                <br/>

                <label for="img_url">Post's Image URL</label><br />
                <input type="text" id="img_url" name="img_url" onChange={handleChange}/> <br/>
                <br/>
                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreatePost
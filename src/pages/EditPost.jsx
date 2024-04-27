import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../client";

import "./EditPost.css";

function EditPost({ data }) {
  const { id } = useParams();
  const [post, setPost] = useState({
    id: null,
    title: "",
    content: "",
    img_url: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updatePost = async (event) => {
    event.preventDefault();

    await supabase
      .from("Hub")
      .update({
        title: post.title,
        content: post.content,
        img_url: post.img_url,
      })
      .eq("id", id);

    window.location = "/";
  };

  const deletePost = async (event) => {
    event.preventDefault();

    await supabase.from("Hub").delete().eq("id", id);

    window.location = "/";
  };

  return (
    <div>
      <form>
        <label for="title">Title</label> <br />
        <input
          type="text"
          id="title"
          name="title"
          value={post.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label for="content">Content</label>
        <br />
        <input
          type="text"
          id="content"
          name="content"
          value={post.content}
          onChange={handleChange}
        />
        <br />
        <br />
        <label for="img_url">Image URL</label>
        <br />
        <input
          type="text"
          id="img_url"
          name="img_url"
          value={post.img_url}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <input type="submit" value="Submit" onClick={updatePost} />
        <button className="deleteButton" onClick={deletePost}>Delete Post</button>
      </form>
    </div>
  );
};

export default EditPost;

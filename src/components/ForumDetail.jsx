import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";
import "./ForumDetail.css";

function ForumDetail() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    const postDetail = async () => {
      const { data } = await supabase.from("Hub").select().eq("id", id);
      console.log(data);
      setPost(data);
      console.log(post);
    };
    postDetail();
  }, []);

  return (
    <div>
      {console.log(post)}
      {post.length > 0 ? (
        <div>
          <h1>{post[0].title}</h1>
          <h3>{post[0].content}</h3>
          <img src={post[0].img_url} alt="" />
        </div>
      ) : null}
      <Link to={"/edit/" + id}><button>Edit Post</button></Link>
    </div>
  );
}

export default ForumDetail;

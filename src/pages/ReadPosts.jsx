import React, { useState, useEffect } from 'react';
import Forum from '../components/Forum';
import { supabase } from '../client';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './ReadPosts.css';

function ReadPosts(props) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.data);
        const fetchPosts = async () => {
            const {data} = await supabase
              .from('Hub')
              .select()
              .order('created_at', { ascending: true });
            // set state of posts
            setPosts(data)
          }
            fetchPosts();
    }, [props]);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                <Link to={`/${post.id}`} key={post.id}>
                   <Forum title={post.title} time_ago={moment(post.created_at).fromNow()}/>
                </Link>
                ) : null
            }
        </div>  
    )
}

export default ReadPosts;
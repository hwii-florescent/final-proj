import React from 'react';
import "./Forum.css";
function Forum({ title, time_ago }) {
    return (
        <div>
            <h3>Posted {time_ago}</h3>
            <h1>{title}</h1>
        </div>
    )
}

export default Forum;
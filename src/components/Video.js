import React, { useState } from "react";
import Comments from "./Comments"

const linkStyles = {
    margin: "15px 15px 0px"
}

function Video({ video }) {

    const [showComments, setShowComments] = useState(true);
    const [upVotes, setUpVotes] = useState(video.upvotes);
    const [downVotes, setDownVotes] = useState(video.downvotes);
    const [commentsTextContent, setTextContent] = useState(true)

    function handleClick() {
        setShowComments(!showComments)
        setTextContent(!commentsTextContent)
    }

    return (
        <div>
            <iframe
            width="850"
            height="525"
            src= {video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title= {video.title}
            />
            <h1>{video.title}</h1>
            <p>{video.views} views | Uploaded {video.createdAt}</p>
            <button onClick={() => setUpVotes(upVotes + 1)}>{upVotes}👍</button><button onClick={() => setDownVotes(downVotes + 1)}>{downVotes}👎</button>
            <br />
            <button onClick= {handleClick} style={linkStyles}>{commentsTextContent ? "Hide Comments" : "Show Comments"}</button>
            <hr />
            {showComments ? <Comments videoData={video}/> : ""}
        </div>
    )
}

export default Video;
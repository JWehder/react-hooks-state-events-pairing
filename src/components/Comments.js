import React from "react";
import CommentItem from "./CommentItem"

function Comments({ videoData }) {
    const itemsToDisplay = videoData.comments.map((comment) => {
        return <CommentItem comment={comment} />
    })

    return (
        <div>
            <h3>{videoData.comments.length} Comments</h3>
            {itemsToDisplay}
        </div>
    )
}

export default Comments;
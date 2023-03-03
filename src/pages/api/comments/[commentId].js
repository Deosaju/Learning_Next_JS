import { comments } from "data/comments";

export default async function handler(req, res) {
    const commentId = req.query.commentId;
    if (req.method === 'GET') {
        const comment = comments.find((comment) => comment.id === parseInt(commentId));
        res.status(200).json(comment);
    }
    else if(req.method === 'DELETE') {
        const deleteComment = comments.find((comment) => comment.id === parseInt(commentId));
        const commentIndex = comments.findIndex((comment) => comment.id === parseInt(commentId));
        if (commentIndex >= 0) {
            comments.splice(commentIndex, 1);
        }
        res.status(200).json(deleteComment);
    }
}
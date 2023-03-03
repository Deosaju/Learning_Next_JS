import { comments } from "data/comments";


export default function handler(req, res) {
    if (req.method == 'GET')
        res.status(200).json(comments)
    else if(req.method == 'POST') {
        const { text } = req.body;
        const newComment = {
            id: comments.length + 1,
            text
        }
        comments.push(newComment);
        res.status(201).json(newComment);
    }
}


import { comments } from "data/comments";

function IndivudualComments ({comment}) {
    return (
        <div>
            <h1>Comment {comment.id}</h1>
            <p>{comment.text}</p>
        </div>
    );
}

export default IndivudualComments;

export async function getStaticPaths() {
    return {
        paths: [
            { params: { commentId: "1" } },
            { params: { commentId: "2" } },
            { params: { commentId: "3" } },
        ],
        fallback: false
    };
}

export async function getStaticProps(context) {
    const {params} = context;
    const { commentId } = params;
    const comment = comments.find((comment) => comment.id === parseInt(commentId));
    return {
        props: {
            comment
        }
    };
}

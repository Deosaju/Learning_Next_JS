function Post(data) {
    return (
        <div>
            <h1>Post</h1>
            <h3>{data.data.id}</h3>
            <h3>{data.data.title}</h3>
            <p>{data.data.body}</p>
        </div>
    )

}

export default Post;

export async function getStaticProps(context) {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
    const posts = await res.json() 

    return {
        props: {
            data: posts
        },
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { postid: "1" } },
            { params: { postid: "2" } },
            { params: { postid: "3" } },
        ],
        fallback: false
    }
}
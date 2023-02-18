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
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    // This unfunction maps the posts to the path /posts/[postid] and store it an array
    const paths = posts.map((post) => ({
        params: { postid: `${post.id}` },
    }))

    return {
        paths,
        fallback: false
    }
}
import { useRouter } from "next/router";

function Post(data) {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>
    }

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


// This function tells Next.js to pre-render this page at build time using the props returned by getStaticProps.
export async function getStaticPaths() {
    const res = await fetch("http://localhost:3004/products")
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    // This unfunction maps the posts to the path /posts/[postid] and store it an array
    const paths = posts.map((post) => ({
        params: { postid: `${post.id}` },
    }))

    //fallback: false means that posts not returned by getStaticPaths will result in a 404 page.
    //fallback: true means that the page will be server-side rendered if the path doesn’t exist in the cache.
    //fallback: blocking means that the page will be server-side rendered if the path doesn’t exist in the cache, and the result will be cached for future requests.
    //and it is mandatory to return a fallback: false or fallback: true or fallback: blocking
    

    return {
        // paths,
        paths : [
            { params: { postid: '1' } },
            { params: { postid: '2' } },
            { params: { postid: '3' } },
            { params: { postid: '4' } },
        ],
        fallback: true,
    }
}


// This will fetch the post data from the API and pass it to the Post component as a prop.
export async function getStaticProps(context) {
    const { params } = context;
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
    const res = await fetch(`http://localhost:3004/products/${params.postid}`)
    const posts = await res.json() 

    if(!posts.id) {
        return {
            notFound: true,
        }
    }
    
    console.log(`Generating static props for ${params.postid}`);
    return {
        props: {
            data: posts
        },
    }
}
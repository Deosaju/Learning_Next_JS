import Link from "next/link"

function posts({ data }) {
    return (
        <div>
            <h1>Posts</h1>
            {
                data.map((post) => (
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`} passHref>
                            <h2>{post.title}</h2>
                            <h2>{post.namew}</h2>
                        </Link>
                        <hr></hr>
                    </div>
                ))

            }
        </div>
    )

}

export default posts

export async function getStaticProps() {
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const res = await fetch("http://localhost:3004/products")
    const posts = await res.json()

    return {
        props: {
            data: posts
        },
        revalidate: 1,
    }

    

    // return {
    //     props: {
    //         data:  posts.slice(0, 4)
    //     },
    // }
}

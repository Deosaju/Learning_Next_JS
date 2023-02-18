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
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()

    return {
        props: {
            data: posts.slice(0, 3)
        },
    }
}

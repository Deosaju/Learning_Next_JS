import Link from "next/link"


function Home () {
  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>
      <Link href="/Nested">
        Blog
      </Link>
    </div>
  )
}

export default Home
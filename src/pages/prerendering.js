import User from "components/user"

function prerendering({ users }) {
    return <>
        <h1>Prerendering</h1>
        {users.map(user =>
            <User key={user.id} user={user} />
        )}
    </>
}

export default prerendering;

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return {
        props: {
            users
        },
    }
}
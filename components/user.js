function User({ user }) {
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    )
}

export default User

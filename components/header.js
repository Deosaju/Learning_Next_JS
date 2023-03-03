import {signIn,signOut} from 'next-auth/next'
import Link from 'next/link'

function Header(){
    return (
        <div className="layout-header">
            <h1>My Header</h1>
            <br></br>
            <Link href='/api/auth/signin' style={{color:'red'}} onClick={e=>{
                e.preventDefault()
            }}>
                Sign In
            </Link>
            <br></br>
            <Link href='/api/auth/signout' style={{color:'red'}} onClick={e=>{
                e.preventDefault()
            }}>
                Sign Out
            </Link>
        </div>
    )
}

export default Header
import Link from 'next/link'

function product({productId = 100}) {
    return <>
        <h1>
            <Link href="/Dynamic/1" replace>product 1</Link>
        </h1>
        <h1> product 2</h1>
        <h1> product 3</h1>
        <h1>
            <Link href={`/Dynamic/${productId}`}>product {productId}</Link>
        </h1>
    </>
    //replace will not add the page to the history stack , so you can't go back to it and will go to home page
}

export default product
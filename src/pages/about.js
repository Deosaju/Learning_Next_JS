import styles from '@/styles/About.module.scss'
import Footer from 'components/footer'
import Head from 'next/head'
import Image from 'next/image'

function contact() {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="keywords" content="about" />
            </Head>

            <h2 className={styles.highlightscss} >About</h2>
            <Image src="/Readme_assets/Routing.png" width={200} height={200} />
        </>
    )
}

export default contact

contact.getLayout = function getLayout(page) {
    return (
        <>
            
            {page}
            <Footer /> 
        </>
    )
}
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
            This is from environment {process.env.NEXT_PUBLIC_API_URL}
            <h2 className={styles.highlightscss} >About</h2>
            <Image src="/Readme_assets/Routing.png" width={200} height={200} alt='bigi'/>
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


export const getStaticProps = async () => {
    const user = process.env.DB_USERNAME;
    const pass = process.env.DB_PASSWORD;

    console.log(user, pass);

    return {
        props: {
            user,
            pass,
        },
    };

}
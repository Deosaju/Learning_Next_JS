import styles from '@/styles/Contact.module.css'

function contact() {
    return (
        <>
            <h2 className={styles.highlight} >Contact</h2>
            <button onClick={() => alert('Hello World!')} >Click Me</button>
        </>
    )
}

export default contact
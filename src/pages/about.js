import styles from '@/styles/About.module.scss'

function contact() {
    return (
        <>
            <h2 className={styles.highlightscss} >About</h2>
            <button onClick={() => alert('Hello World!')} >Click Me</button>
        </>
    )
}

export default contact
import styles from '/src/styles/loading.module.scss'

const Loading = () => {
    return (
        <section className={styles.loading}>
            <div class={styles.lds_facebook}><div></div><div></div><div></div></div>
        </section>
    )
}

export default Loading;
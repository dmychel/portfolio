import styles from '/src/styles/normie/modal.module.scss'

const Modal = () => {
    return (
        <div className={styles.modal}>
            <span className={styles.exit}>&#10006;</span>
            <p>Welcome!</p>
            <p>
                I&apos;d recommend trying out developer view by <span>clicking here</span>, or by navigating to the title in the header of the page.
            </p>
        </div>
    )
}

export default Modal
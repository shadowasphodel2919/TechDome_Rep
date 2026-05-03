import styles from './SkeletonCard.module.css'

const SkeletonCard = () => (
    <div className={styles.card}>
        <div className={`skeleton ${styles.thumbnail}`} />
        <div className={styles.body}>
            <div className={`skeleton ${styles.line} ${styles.lineLong}`} />
            <div className={`skeleton ${styles.line} ${styles.lineMed}`} />
            <div className={`skeleton ${styles.line} ${styles.lineShort}`} />
            <div className={styles.meta}>
                <div className={`skeleton ${styles.metaChip}`} />
                <div className={`skeleton ${styles.metaChip}`} />
            </div>
        </div>
    </div>
)

export default SkeletonCard

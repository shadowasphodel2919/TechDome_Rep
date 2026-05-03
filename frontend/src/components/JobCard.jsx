import { MapPin, ExternalLink, Clock, Building } from 'lucide-react'
import styles from './JobCard.module.css'

const JobCard = ({ job }) => {
    if (!job) return null

    const { title, company, url, locations, date, salary, description } = job

    const shortDesc = description
        ? description.replace(/<[^>]*>/g, '').slice(0, 120) + '…'
        : null

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            aria-label={`View job: ${title}`}
        >
            <div className={styles.header}>
                <div className={styles.companyAvatar}>
                    <Building size={18} />
                </div>
                <div className={styles.headerInfo}>
                    <h3 className={styles.title}>{title}</h3>
                    {company && <p className={styles.company}>{company}</p>}
                </div>
                <ExternalLink size={14} className={styles.extIcon} />
            </div>

            {shortDesc && <p className={styles.desc}>{shortDesc}</p>}

            <div className={styles.tags}>
                {locations && (
                    <span className={styles.tag}>
                        <MapPin size={11} />
                        {locations}
                    </span>
                )}
                {date && (
                    <span className={styles.tag}>
                        <Clock size={11} />
                        {date}
                    </span>
                )}
                {salary && (
                    <span className={`${styles.tag} ${styles.salaryTag}`}>
                        {salary}
                    </span>
                )}
            </div>
        </a>
    )
}

export default JobCard

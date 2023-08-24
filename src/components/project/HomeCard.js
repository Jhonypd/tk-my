import { Link } from 'react-router-dom'
import styles from './HomeCard.module.css'

import { MdDesignServices } from 'react-icons/md'

function HomeCard({ id, name, budget, category }) {



    return (
        <div className={styles.home_card}>
            <h4>
                <div className={styles.home_card_actions}>
                    <Link className={styles.category_icon} to={`/project`}>
                        <MdDesignServices className={`${styles[category.toLowerCase]}`} />
                    </Link>
                </div>
            </h4>
            <div className={styles.content_info}>

                <p>
                    <span>Valor:</span> R${budget}
                </p>
                <p className={styles.category_text}>
                    {category}
                </p>
            </div>
        </div>
    )
}

export default HomeCard
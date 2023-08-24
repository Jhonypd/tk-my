import { FaGithub, FaEnvelope, FaLinkedin, FaTelegram } from 'react-icons/fa'

import styles from './Footer.module.css'



function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://t.me/@jhonydph" >
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="mailto:jhonyfrontend@outlook.com?subject=Dúvidas" rel='noreferrer' >
                        <FaEnvelope />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jhonypereiraduarte/" rel={'noreferrer'} >
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://t.me/@jhonydph" rel='noreferrer' >
                        <FaTelegram />
                    </a>
                </li>
            </ul>
            <p className={styles.copy_right}><span>Desenvolvido por Jhony Pereira </span>  <small>&copy; 2023</small></p>
        </footer>
    )
}

export default Footer
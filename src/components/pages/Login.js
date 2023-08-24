import LoginForm from '../service/LoginForm'
import styles from './Login.module.css'

function Login() {


    const submit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <section className={styles.login_container}>
                <LoginForm />
            </section>
        </div>
    )
}

export default Login
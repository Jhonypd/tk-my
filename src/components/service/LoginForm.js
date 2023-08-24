import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/ProjectForm.module.css'

function LoginForm({handleSubmit, btnText, projectData}) {

    const [User, setUser] = useState({})

    function submit (e) {
        e.preventDefault()
        projectData.Users.push(User)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setUser({...User, [e.target.name]: e.target.value})
    }
    return (
        <form onSubmit={submit} className={styles.form} >
            <Input
                type='text'
                text='Usuário'
                name='name'
                placeholder='Username'
                handleOnChange={handleChange}
            />
            
            <Input
                type='text'
                text='Senha'
                name='description'
                placeholder='Password'
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}


export default LoginForm
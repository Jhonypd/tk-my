import { useState, useEffect } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {

        fetch('http://localhost:5000/categories', {
            method: 'Get',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])


    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange (e) {
        setProject({...project, [e.target.name] : e.target.value })
    }

    function handleCategory (e) {
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='titulo'
                name='name'
                placeholder='Digite um titulo'
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input
                type='number'
                text='Valor'
                name='budget'
                placeholder='Digite um valor'
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />

            <Select
                name='category_id'
                text='Selecione uma categoria'
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm
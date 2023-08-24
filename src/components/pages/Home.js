import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'

import { useState, useEffect } from 'react'
import Container from '../layout/Container'
import HomeCard from '../project/HomeCard'


function Home() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/projects/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/jason',
            },
        })
            .then(resp => resp.json())
            .then(data => {
                setProjects(data)
            })
            .catch((err) => console.log(err))
    }, [])

    
    return (
        <div className={styles.home_container}>
            <div className={styles.title_container}>
                <h1>Dashboard</h1>
                <LinkButton to='/newproject' text='Criar Projeto' />
            </div>

            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <HomeCard
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                        />
                    ))}
            </Container>
        </div>
    )
}

export default Home
import React from 'react'
import {useRouteMatch} from 'react-router-dom'

import LogoImage from '../../assets/logo.svg'
import {FiChevronLeft} from 'react-icons/fi'

import {Container} from './styles'

interface RepositoryParams {
  repository: string
}

const Repository: React.FC = () => {
  const {params} = useRouteMatch<RepositoryParams>()
  return (
    <>
      <Container>
        <img src={LogoImage} alt="GitHub Explore"/>

        <div>
          <FiChevronLeft size={20}/>
          <p>Voltar</p>
        </div>
      </Container>

      <div>

      <img src="https://avatars1.githubusercontent.com/u/6674232?s=400&u=344a7d5b79c79db1a77c0830bcf68bf68e2d9694&v=4" alt="Profile image"/>
        <h1>{params.repository}</h1>
        <div>
          <p>Desription the repository</p>
        </div>
      </div>

    </>
  )
}

export default Repository

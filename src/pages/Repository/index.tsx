import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'

import LogoImage from '../../assets/logo.svg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { Header, RepositoryInfo, Issues } from './styles'

interface RepositoryParams {
  repository: string
}

const Repository: React.FC = () => {
  const {params} = useRouteMatch<RepositoryParams>()
  return (
    <>
      <Header>
        <img src={LogoImage} alt="GitHub Explore"/>
          <Link to="/">
            <FiChevronLeft size={20}/>
            <p>Voltar</p>
          </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="https://avatars3.githubusercontent.com/u/6674232?v=4" alt="Profile Info"/>
          <div>
            <strong>user/repository</strong>
            <p>Repository description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1809</strong>
            <span>Star</span>
          </li>

          <li>
            <strong>90</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>45</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link
          to={'/'}
        >
          <div>
            <strong>Title issue</strong>
              <p>Description issue</p>
            </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>

      <Issues>
        <Link
          to={'/'}
        >
          <div>
            <strong>Title issue</strong>
              <p>Description issue</p>
            </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  )
}

export default Repository

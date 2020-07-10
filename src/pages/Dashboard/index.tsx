
import React, { useState, useEffect, FormEvent } from 'react'

import { FiChevronRight } from 'react-icons/fi'
import LogoImage from '../../assets/logo.svg'

import api from '../../services/api'

import { Title, Form, Repositories, Error } from './styles'

interface Repository {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

const Dashboard: React.FC = () => {
  const [repositories, setrepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplore:repositories')

    if(storagedRepositories) {
      return JSON.parse(storagedRepositories)
    }

    return []
  })

  const [newRepository, setNewRepository] = useState('')
  const [inputError, setInputError] = useState('')

  useEffect(() => {
    localStorage.setItem('@GithubExplore:repositories', JSON.stringify(repositories))
  }, [repositories])

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {

    event.preventDefault()

    if(!inputError) {
      setInputError('Por favor, entre com autor/nome do repositório corretos')
      return
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepository}`)
      const repository = await response.data

      setrepositories([...repositories, repository])
      setNewRepository('')
      setInputError('')
    } catch(error) {
      setInputError('Repositório não encontrado')
      setNewRepository('')
    }

  }

  return (
    <>
      <img src={LogoImage} alt="Github Explore" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Explorar um repositório"
          value={newRepository}
          onChange={e => setNewRepository(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>


      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard

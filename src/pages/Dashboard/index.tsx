/* eslint-disable camelcase */
import React, { useEffect, useState, FormEvent } from 'react'

import { FiChevronRight } from 'react-icons/fi'
import LogoImage from '../../assets/logo.svg'

import api from '../../services/api'

import { Title, Form, Repositories } from './styles'

interface Repository {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

const Dashboard: React.FC = () => {
  const [repositories, setrepositories] = useState<Repository[]>([])
  const [newRepository, setNewRepository] = useState('')

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault()
    const response = await api.get<Repository>(`repos/${newRepository}`)
    const repository = await response.data
    setrepositories([...repositories, repository])
    setNewRepository('')
  }

  return (
    <>
      <img src={LogoImage} alt="Github Explore" />
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Explorar um repositório"
          value={newRepository}
          onChange={e => setNewRepository(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

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

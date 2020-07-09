import styled from 'styled-components'
import { shade } from 'polished'

export const Title = styled.h1`
  max-width: 433px;

  font-size: 48px;
  color: #3a3a3a;
  line-height: 56px;
  margin-top: 40px;
`

export const Form = styled.form`
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0px 0px 5px;
    color: #a8a8b3;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    max-width: 200px;
    width: 100vh;
    padding: 19px 64px;
    background: #04d361;
    border: none;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    height: 70px;
    transition: background-color 1s;
    font-weight: bold;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin: 0 16px;

      strong {
        font-size: 16px;
        color: #3d3d4d;
        line-height: 28px;
      }

      p {
        font-size: 14px;
        color: #a8a8b3;
        line-height: 21px;
      }
    }
    svg {
      margin-left: auto;
      color: #a8a8b3;
    }
  }
`

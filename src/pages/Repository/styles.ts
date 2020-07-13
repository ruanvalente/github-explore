import { shade } from 'polished';
import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#a8a8b3')}
    }

    svg {
      margin-right: 12px;
    }
  }
`

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 30px;

      strong {
        font-size: 36px;
        line-height: 42px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        line-height: 23px;
        color: #737380;
        margin-top: 8px;
      }
    }
  }

  ul {
    display: flex;
    margin: 40px;
    list-style: none;

    li {

      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3D3D4D;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`

export const Issues = styled.div`
  margin-top: 16px;

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

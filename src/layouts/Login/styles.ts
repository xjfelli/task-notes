import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary[900]};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
    font-size: 16px;
    font-weight: 700;
  }

  p {
    color: white;
    font-size: 14px;
  }
`

export const ShadowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  height: 300px;
  padding: 20px;
  border-radius: 18px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  color: black;

  background-color: ${({ theme }) => theme.colors.primary[100]};

  h1 {
    color: black;
  }

  p {
    color: ${({ theme }) => theme.colors.gray[300]};
  }

  @media (min-width: 500px) {
    h1 {
      font-size: 20px;
    }
  }
`
export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  height: 100%;

  input {
    margin-bottom: 20px;
  }
`

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  font-weight: 600;
  outline: none;
  padding: 8px 12px;
  border-radius: 3px;
  background-color: transparent;
  font-size: 14px;

  ::placeholder {
    font-weight: 100;
    font-size: 12px;
  }
`

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  height: 30px;
  width: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.success[400]};
  :hover {
    background-color: ${({ theme }) => theme.colors.success[500]};
  }
  cursor: pointer;
`

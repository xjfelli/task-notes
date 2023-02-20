import React from 'react'

import * as S from './styles'

export function LoginLayout() {
  return (
    <S.Container>
      <S.ShadowContainer>
        <h1>Bem-vindo</h1>
        <p>Por favor insira suas credenciais.</p>
        <S.LoginForm>
          <S.Input placeholder="Digite seu e-mail" />
          <S.Input type="password" placeholder="Digite sua senha" />
          <S.Button type="submit">Entrar</S.Button>
        </S.LoginForm>
      </S.ShadowContainer>
    </S.Container>
  )
}

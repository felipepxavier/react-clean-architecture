import React, { useEffect, useState } from 'react'
import Styles from './signup-styles.scss'
import { Footer, Input, FormStatus, LoginHeader } from '@/presentation/components'
import { Validation } from '@/presentation/protocols/validation'
import Context from '@/presentation/contexts/form/form-context'

type Props = {
  validation: Validation
}
const SignUp: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    passwordConfirmationError: 'Campo obrigatório',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      nameError: validation.validate('name', state.name),
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.name, state.email, state.password])

  return (
    <div className={Styles.signup}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <h2>Criar conta</h2>
          <Input type="text" name="name" placeholder="Digite seu nome" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <Input type="password" name="passwordConfirmation" placeholder="Repita sua senha" />

          <button data-testid="submit" disabled className={Styles.submit} type="submit">Criar</button>
          <span className={Styles.link}>Voltar</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />

    </div>
  )
}

export default SignUp

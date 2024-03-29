import React from 'react'
import faker from 'faker'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import Input from './input'
import Context from '@/presentation/contexts/form/form-context'

const makeSut = (fieldName: string): RenderResult => (
  render(
    <Context.Provider value={ { state: {} }}>
      <Input name={fieldName} />
    </Context.Provider>
  )
)

describe('Input component', () => {
  test('should begin with readOnly', () => {
    const field = faker.database.column()
    const sut = makeSut(field)

    const input = sut.getByTestId(field) as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })

  test('should remove readOnly on focus', () => {
    const field = faker.database.column()
    const sut = makeSut(field)

    const input = sut.getByTestId(field) as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBe(false)
  })
})

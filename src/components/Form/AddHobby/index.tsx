import React, { useState } from 'react'
import uuidv1 from 'uuid/v1'
// interface
import Hobby from '../../../interfaces/Hobby.interface'
import { Passion } from '../../../interfaces/Passion.interface'
// containers
import DataTable from '../../Styles/shared/DataTable'
import { InputWrap, SelectWrap, Button } from '../../Styles/shared'

const initState = {
  passion: 'low',
  hobby: '',
  createdAt: new Date().toISOString().split('T')[0],
}

type FormAddProps = {
  addHobby: Function
  userId: string | number
}

const Passions: Passion = {
  low: 'low',
  medium: 'medium',
  high: 'high',
  very_high: 'very-high',
}

const HobbyAddForm: React.FC<FormAddProps> = ({ addHobby, userId }) => {
  const { add, handleChange, state } = useAddFormHook(addHobby, userId)
  return (
    <form onSubmit={event => add(event)}>
      <DataTable columns={['Passion', 'Hobby', 'Year', 'Action']}>
        <tr>
          {(Object.keys(state) as Array<keyof typeof state>).map(input => {
            return (
              <td key={input}>
                {input === 'passion' ? (
                  <SelectWrap>
                    <select onChange={e => handleChange(input, e)} value={state[input]}>
                      {(Object.keys(Passions) as Array<keyof typeof Passions>).map(option => (
                        <option key={option} value={Passions[option]}>
                          {Passions[option]}
                        </option>
                      ))}
                    </select>
                  </SelectWrap>
                ) : (
                  <InputWrap>
                    <input
                      placeholder={`Enter ${input}`}
                      type={input === 'createdAt' ? 'date' : 'text'}
                      value={state[input]}
                      onChange={e => handleChange(input, e)}
                    />
                  </InputWrap>
                )}
              </td>
            )
          })}
          <td>
            <Button type="submit">Add</Button>
          </td>
        </tr>
      </DataTable>
    </form>
  )
}

const useAddFormHook = (addHobby: Function, userId: Number | String) => {
  const [state, setState] = useState(initState)

  const reset = () => {
    setState(initState)
  }

  const add = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (state.passion.trim() !== '' && state.hobby.trim() !== '') {
      const hobby: Hobby = {
        id: uuidv1(), // mock API generate id, this is not a required field right now
        passion: state.passion,
        hobby: state.hobby,
        createdAt: state.createdAt,
      }
      addHobby(hobby, userId)
      reset()
    }
  }

  const handleChange = (key: string, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setState({ ...state, [key]: e.target.value })
  }
  return { add, handleChange, state }
}

export default HobbyAddForm

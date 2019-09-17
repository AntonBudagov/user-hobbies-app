import React, { FunctionComponent, useEffect, useState } from 'react'
import { connect } from 'react-redux'

import User from './interfaces/User.interface'
import { postUserRequest, getUserRequest, deleteUserRequest } from './store/users/actions'
import { postHobbyRequest } from './store/hobbies/actions'

import Header from './components/Header'
import UseList from './components/UserList'
import AddUser from './components/Form/AddUser'
import HobbyList from './components/HobbyList'
import AddHobby from './components/Form/AddHobby'
import './App.scss'

type AppProps = {
  users: Array<User>
  getUserRequest: Function
  postUserRequest: Function
  deleteUserRequest: Function
  postHobbyRequest: Function

  selected: number | string
}

const App: FunctionComponent<AppProps> = props => {
  const [users, setUsers] = useState([])

  const { selected, getUserRequest, postUserRequest, postHobbyRequest, deleteUserRequest } = props
  const content = selected ? (
    <>
      {' '}
      <AddHobby addHobby={postHobbyRequest} userId={selected} />
      <HobbyList />
    </>
  ) : (
    <div>Chose user</div>
  )
  const ClassNames = selected ? 'elem elem-100' : 'elem not_found'
  const countUser = props.users.length

  useEffect(() => {
    getUserRequest()
    setUsers(users)
  }, [getUserRequest, users])

  return (
    <div className="App">
      <Header count={countUser} />
      <hr />
      <div className="wrap">
        <div className="elem">
          <AddUser addUser={postUserRequest} />
          <UseList deleteUser={deleteUserRequest} />
        </div>
        <div className={ClassNames}>{content}</div>
      </div>
      <hr />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  users: state.users.users,
  selected: state.hobbies.selected,
})

export default connect(
  mapStateToProps,
  { getUserRequest, postUserRequest, postHobbyRequest, deleteUserRequest },
)(App)

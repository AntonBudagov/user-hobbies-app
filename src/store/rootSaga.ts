import { all, takeLatest } from 'redux-saga/effects'
import { addUser, deleteUser, addHobby, getUsers, getUserById, deleteHobby } from './saga'

import { UsersTypes } from './users/types'
import { HobbyTypes } from './hobbies/types'

export default function* rootSaga() {
  return yield all([
    takeLatest(UsersTypes.GET_USERS_REQUEST, getUsers),
    takeLatest(UsersTypes.POST_USERS_REQUEST, addUser),
    takeLatest(UsersTypes.DELETE_USERS_REQUEST, deleteUser),

    takeLatest(HobbyTypes.GET_HOBBY_REQUEST, getUserById),
    takeLatest(HobbyTypes.POST_HOBBY_REQUEST, addHobby),
    takeLatest(HobbyTypes.DELETE_HOBBY_REQUEST, deleteHobby),
  ])
}
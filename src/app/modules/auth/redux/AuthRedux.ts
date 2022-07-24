import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {put, takeLatest, select, call} from 'redux-saga/effects'
import {IProvince, ISelect} from '../../../../utils/models'
import {UserModel} from '../models/UserModel'
import {getUserByToken} from './AuthCRUD'
export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const actionTypes = {
  Login: '[Login] Action',
  Logout: '[Logout] Action',
  Register: '[Register] Action',
  UserRequested: '[Request User] Action',
  UserLoaded: '[Load User] Auth API',
  SetUser: '[Set User] Action',
  SetBlogCategory: '[Set Blog Category] Action',
  SetProvinces: '[Set Provinces] Action',
  SetInvestor: '[Set Investor] Action',
}

const initialAuthState: IAuthState = {
  user: undefined,
  accessToken: undefined,
  blogCategory: undefined,
  provinces: undefined,
}

export interface IAuthState {
  user?: UserModel
  accessToken?: string
  blogCategory?: ISelect[]
  provinces?: IProvince[]
}

export const reducer = persistReducer(
  {storage, key: 'v100-demo1-auth', whitelist: ['user', 'accessToken']},
  (state: IAuthState = initialAuthState, action: ActionWithPayload<IAuthState>) => {
    switch (action.type) {
      case actionTypes.Login: {
        const accessToken = action.payload?.accessToken
        return {accessToken, user: undefined}
      }

      case actionTypes.Register: {
        const accessToken = action.payload?.accessToken
        return {accessToken, user: undefined}
      }

      case actionTypes.Logout: {
        return initialAuthState
      }

      case actionTypes.UserLoaded: {
        const user = action.payload?.user
        return {...state, user}
      }

      case actionTypes.SetUser: {
        const user = action.payload?.user
        return {...state, user}
      }
      case actionTypes.SetBlogCategory: {
        const blogCategory = action.payload?.blogCategory
        return {...state, blogCategory}
      }
      case actionTypes.SetProvinces: {
        const provinces = action.payload?.provinces
        return {...state, provinces}
      }
      default:
        return state
    }
  }
)

export const actions = {
  login: (accessToken: string) => ({type: actionTypes.Login, payload: {accessToken}}),
  register: (accessToken: string) => ({
    type: actionTypes.Register,
    payload: {accessToken},
  }),
  logout: () => ({type: actionTypes.Logout}),
  requestUser: () => ({
    type: actionTypes.UserRequested,
  }),
  fulfillUser: (user: UserModel) => ({type: actionTypes.UserLoaded, payload: {user}}),
  setUser: (user: UserModel) => ({type: actionTypes.SetUser, payload: {user}}),
  setProvinces: (provinces: IProvince[]) => ({type: actionTypes.SetProvinces, payload: {provinces}}),
}

export function* saga() {
  yield takeLatest(actionTypes.Login, function* loginSaga() {
    yield put(actions.requestUser())
  })

  yield takeLatest(actionTypes.Register, function* registerSaga() {
    yield put(actions.requestUser())
  })

  yield takeLatest(actionTypes.UserRequested, function* userRequested(): any {
    const getToken = (state: {auth: {accessToken: unknown}}) => state.auth.accessToken
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const token = yield select(getToken)
    const {data: user} = yield getUserByToken(token)
    yield put(actions.fulfillUser(user))
  })
}

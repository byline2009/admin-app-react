import {FC, useRef, useEffect, useState} from 'react'
import {shallowEqual, useSelector, connect, useDispatch, ConnectedProps} from 'react-redux'
import * as auth from './AuthRedux'
import {getUserByToken} from './AuthCRUD'
import {RootState} from '../../../../setup'
import LayoutSplashScreen from '../../../pages/splashcreen/LayoutSplashScreen'
import {Outlet} from 'react-router-dom'

const mapState = (state: RootState) => ({auth: state.auth})
const connector = connect(mapState, auth.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const AuthInit: FC<PropsFromRedux> = (props) => {
  const didRequest = useRef(false)
  const dispatch = useDispatch()
  const [showSplashScreen, setShowSplashScreen] = useState(true)
  const accessToken = useSelector<RootState>(({auth}) => auth.accessToken, shallowEqual)

  // We should request user by authToken before rendering the application
  useEffect(() => {
    const requestInitValues = async () => {
      try {
        if (!didRequest.current) {
          const {data: user} = getUserByToken(accessToken as string)
          dispatch(props.fulfillUser(user))
        }
      } catch (error) {
        if (!didRequest.current) {
          dispatch(props.logout())
        }
      } finally {
        setShowSplashScreen(false)
      }

      return () => (didRequest.current = true)
    }

    if (accessToken) {
      requestInitValues()
    } else {
      dispatch(props.logout())
      setShowSplashScreen(false)
    }
    // eslint-disable-next-line eslint-comments/no-unlimited-disable
  }, [])

  return showSplashScreen ? (
    <LayoutSplashScreen />
  ) : (
    <>
      <Outlet />
    </>
  )
}

export default connector(AuthInit)

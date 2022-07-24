import {actionTypes} from '../../app/modules/auth'

export default function setupAxiosFormData(axios: any, store: any) {
  axios.interceptors.request.use(
    (config: any) => {
      const {
        auth: {accessToken},
      } = store.getState()
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }

      return config
    },
    (err: any) => Promise.reject(err)
  )
  axios.interceptors.response.use(
    function (response: any) {
      // Do something with response data
      return response
    },
    function (error: any) {
      // console.log('error.response', error.response)
      // Do something with response error
      if (error.response.status == 401) {
        store.dispatch({type: actionTypes.Logout})
      } else if (error.response.status == 400) {
        const keys = Object.keys(error.response.data.errors)
        const values = Object.values(error.response.data.errors)
        if (keys && keys.length > 0) {
          const textErrors = keys.map((item, index) => item + ' ' + values[index]).join(', ')
          store.dispatch({type: 'SHOW_TOAST', payload: {status: true, text: textErrors, type: 2}})
        }
      }
      return Promise.reject(error)
    }
  )
}

import {actionTypes} from '../../app/modules/auth'

export default function setupAxiosV2(axios: any, store: any) {
  axios.defaults.headers.Accept = 'application/json'
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
        const keys = Object.keys(error.response.data)
        const values = Object.values(error.response.data)
        if (keys && keys.length > 0) {
          const textErrors = keys.map((item, index) => item + ' ' + values[index]).join(', ')
          store.dispatch({type: 'SHOW_TOAST', payload: {status: true, text: textErrors, type: 2}})
        }
      } else if (error.response.status == 500) {
        store.dispatch({type: 'SHOW_TOAST', payload: {status: true, text: 'Không thể xoá dữ liệu này', type: 2}})
      }
      return Promise.reject(error)
    }
  )
}

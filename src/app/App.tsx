import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {I18nProvider} from '../utils/i18n/i18nProvider'
import AuthInit from './modules/auth/redux/AuthInit'
import LayoutSplashScreen from './pages/splashcreen/LayoutSplashScreen'

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <AuthInit>
          <Outlet />
        </AuthInit>
      </I18nProvider>
    </Suspense>
  )
}

export {App}

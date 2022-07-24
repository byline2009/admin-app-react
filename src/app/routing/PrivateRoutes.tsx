import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate, Outlet} from 'react-router-dom'
import TopBarProgress from 'react-topbar-progress-indicator'

import ComingSoonPage from '../pages/coming-soon/ComingSoonPage'

const routesAsideMenu = [
  {
    url: '/blog',
  },
]

const PrivateRoutes = () => {
  const Dashboard = lazy(() => import('../pages/dashboard/DashBoard'))

  return (
    <Routes>
      <Route element={<Outlet />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route
          path='dashboard'
          element={
            <SuspensedView>
              <Dashboard />
            </SuspensedView>
          }
        />

        {/* Lazy Pages */}

        {routesAsideMenu.map((route, index) => {
          return <Route key={route.url} path={`${route.url}/*`} element={<ComingSoonPage />} />
        })}

        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}
interface Props {
  children: any
}
const SuspensedView: FC<Props> = ({children}) => {
  TopBarProgress.config({
    barColors: {
      '0': '#f8f8f8',
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}

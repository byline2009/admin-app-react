import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {Overview} from './components/Overview'
import {Settings} from './components/settings/Settings'

const AccountPage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route
          path='overview'
          element={
            <>
              <Overview />
            </>
          }
        />
        <Route
          path='settings'
          element={
            <>
              <Settings />
            </>
          }
        />
        <Route index element={<Navigate to='/crafted/account/overview' />} />
      </Route>
    </Routes>
  )
}

export default AccountPage

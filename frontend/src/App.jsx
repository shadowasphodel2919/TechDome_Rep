import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import SignUp from './features/users/SignUp'
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import Udemy from './features/dash/Udemy'
import Careerjet from './features/dash/Careerjet'
import PersistLogin from './features/auth/PersistLogin'
import NotFound from './components/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route path="dash" element={<DashLayout />}>
            <Route index element={<Welcome />} />
            <Route path="courses" element={<Udemy />} />
            <Route path="jobs" element={<Careerjet />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App

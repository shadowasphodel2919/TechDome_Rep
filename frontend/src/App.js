import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public';
import Login from './features/auth/Login';
import SignUp from './features/users/SignUp';
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome';
import Udemy from './features/dash/Udemy';
import PersistLogin from './features/auth/PersistLogin';
import Careerjet from './features/dash/Careerjet';
function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            {/** Public Routes */}
            <Route index element={<Public />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />

            {/**Protected Routes */}
            <Route element={<PersistLogin/>}>
              <Route path='dash' element={<DashLayout />}>
                <Route index element={<Welcome />} />
                <Route path='udemy' element={<Udemy/>}/>
                <Route path='careerjet' element={<Careerjet/>}/>
              </Route>
            </Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;

//make changes in useAuth and PersistLogin 

import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuizScreen from './Screens/QuizScreen';
import AdminDashboardScreen from './Screens/AdminDashboardScreen';
import AdminViewUsersScreen from './Screens/AdminViewUsersScreen';
import AdminGenerateLoginCodeScrren from './Screens/AdminGenerateLoginCodeScrren';
import AdminCreateUserScrren from './Screens/AdminCreateUserScrren';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Row } from 'react-bootstrap';
import Sidebar from './Components/sidebar';
import { useContext } from 'react';
import { Store } from './Store';
import ProtectedRoutes from './Components/protectedRoutes';
function App() {
  const { state } = useContext(Store);
  const { userInfo, adminInfo } = state;
  return (

    <div className="App">

      <BrowserRouter>
        <ToastContainer position="bottom-center" limit={1} />
        <div>
          <Row>
            {(userInfo || adminInfo) &&
              <Col md={2}>
                <Sidebar />
              </Col>
            }
            <Col md={10} >

              {adminInfo ? (
                <Routes>
                  <Route path="/adminDashbord" element={<ProtectedRoutes><AdminDashboardScreen /></ProtectedRoutes>} />
                  <Route path="/adminGenerateLoginCode/:id" element={<ProtectedRoutes><AdminGenerateLoginCodeScrren /></ProtectedRoutes>} />
                  <Route path="/adminViewUsers" element={<ProtectedRoutes><AdminViewUsersScreen /></ProtectedRoutes>} />
                  <Route path="/adminCreateUser" element={<ProtectedRoutes><AdminCreateUserScrren /></ProtectedRoutes>} />
                </Routes>
              ) : (
                <Routes>
                  <Route path='/' element={<LoginScreen />} />
                  <Route path='/homeScreen' element={<ProtectedRoutes><HomeScreen /></ProtectedRoutes>} />
                  <Route path='/quiz' element={<ProtectedRoutes><QuizScreen /></ProtectedRoutes>} />
                </Routes>
              )}



            </Col>
          </Row>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

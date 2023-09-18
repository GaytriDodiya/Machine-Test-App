import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuizScreen from './Screens/QuizScreen';
import AdminDashboardScreen from './Screens/AdminDashboardScreen';
import AdminViewUsersScreen from './Screens/AdminViewUsersScreen';
import AdminGenerateLoginCodeScrren from './Screens/AdminGenerateLoginCodeScrren';
import AdminCreateUserScrren from './Screens/AdminCreateUserScrren';
import { Button, Col, Image, Row } from 'react-bootstrap';
import Sidebar from './Components/sidebar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>

          <Row>
            <Col md={2}>
              <Sidebar />
            </Col>
            <Col md={10} >
              <Routes>
                <Route path='/' element={<LoginScreen />} />
                <Route path='/homeScreen' element={<HomeScreen />} />
                <Route path='/quiz' element={<QuizScreen />} />
                <Route path="/adminDashbord" element={<AdminDashboardScreen />} />
                <Route path="/adminViewUsers" element={<AdminViewUsersScreen />} />
                <Route path="/adminGenerateLoginCode" element={<AdminGenerateLoginCodeScrren />} />
                <Route path="/adminCreateUser" element={<AdminCreateUserScrren />} />
              </Routes>
            </Col>
          </Row>
        </div>
      </BrowserRouter>


    </div>
  );
}

export default App;

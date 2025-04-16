import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Layout from './Components/Common/Layout'
import LandingPage from './Screens/LandingPage';

function App() {

  return (
    <>
    <Router>
      <Layout>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
      </Routes>
      </Layout>
    </Router>
    </>
  )
}

export default App

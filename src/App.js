import { Routes, Route, Navigate } from 'react-router-dom'
import Aboutpage from './pages/Aboutpage'
import Blogpage from './pages/Blogpage'
import Homepage from './pages/Homepage'
import Layout from './components/Layout'
import Singlepage from './pages/Singlepage'
import Createpost from './pages/Createpost'
import Editpost from './pages/Editpost'
import Login from './pages/Login'
import RequireAuth from './components/hoc/RequireAuth'
import { AuthProvider } from './components/hoc/AuthProvider'
import './App.css';
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about/*" element={<Aboutpage />}>
            <Route path="contacts" element={<p>Out contacts</p>} />
            <Route path="team" element={<p>Out team</p>} />
          </Route>
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="posts/:id" element={<Singlepage />} />
          <Route path="posts/:id/edit" element={<Editpost />} />
          <Route path="posts/new" element={
            <RequireAuth>
              <Createpost />
            </RequireAuth>} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Homepage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

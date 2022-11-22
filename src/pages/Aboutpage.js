import { Outlet,Route, Routes, Link } from 'react-router-dom'

const Aboutpage = () => {
  return (
    <div>
      <h1>About us</h1>
      <ul>
        <li><Link to="contacts">Out contacts</Link></li>
        <li><Link to="team">Out team</Link></li>
      </ul>
      {/* <Routes>
        <Route path="contacts" element={<p>Out contacts</p>} />
        <Route path="team" element={<p>Out team</p>} />
      </Routes> */}
      <Outlet/>
    </div>
  )
}

export default Aboutpage
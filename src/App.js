import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './components/Home'
import CourseItemDetails from './components/CourseItemDetails'
import './App.css'
import NotFound from './components/NotFound'

// Replace your code here
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses/:id" element={<CourseItemDetails />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  </Router>
)

export default App

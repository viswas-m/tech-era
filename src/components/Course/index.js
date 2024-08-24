import {Link} from 'react-router-dom'
import './index.css'

const Course = props => {
  const {details} = props
  const {id, logoUrl, name} = details
  return (
    <Link to={`courses/${id}`}>
      <li className="listItem">
        <div>
          <img src={logoUrl} alt={name} />
        </div>
        <p className="LinkItems">{name}</p>
      </li>
    </Link>
  )
}
export default Course

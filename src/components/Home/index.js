import React, {useState, useEffect} from 'react'
import TailSpin from 'react-loader-spinner'
import Header from '../Header'
import Course from '../Course'
import './index.css'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isFailed, setIsFailed] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [coursesList, setCoursesList] = useState([])

  const fetchApiDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/te/courses')
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const updatedData = data.courses.map(each => ({
        id: each.id,
        logoUrl: each.logo_url,
        name: each.name,
      }))
      console.log(updatedData)
      setIsLoading(false)
      setIsSuccess(true)
      setIsFailed(false)
      setCoursesList(updatedData)
    } else {
      setIsLoading(false)
      setIsSuccess(false)
      setIsFailed(true)
    }
  }

  useEffect(() => {
    fetchApiDetails()
  }, [])

  return (
    <div>
      <Header />
      <div>
        {isLoading && (
          <div data-testid="loader" className="spinner">
            <TailSpin
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
            />
          </div>
        )}
        {isSuccess && (
          <div>
            <h1>Courses</h1>
            <ul>
              {coursesList.map(each => (
                <Course key={each.id} details={each} />
              ))}
            </ul>
          </div>
        )}
        {isFailed && (
          <div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
                alt="failure view"
              />
            </div>
            <h1>Oops! Something Went Wrong</h1>
            <p>We cannot seem to find the page you are looking for</p>
            <div>
              <button onClick={fetchApiDetails}>Retry</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home

import { Link } from 'react-router-dom'
import Card from '../components/Card'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p>Created through codealongs in the courses IT:Tech for women (Sundsgårdens folkhögskola) and React Front to Back (Udemy.com)</p>
        <p>Created by akickia</p>

        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage

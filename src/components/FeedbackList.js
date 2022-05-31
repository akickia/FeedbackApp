import { useContext } from "react"
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from "../context/FeedbackContext"
import Spinner from "./Spinner"

const FeedbackList = ({handleDelete}) => {

  const {feedback, isLoading} = useContext(FeedbackContext);


  if (!isLoading && (!feedback || feedback.length === 0)) {
    return (<p>No feedback yet!</p>)
  }
  
  return isLoading ? (<Spinner />)
:(
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
      ))}
    </div>


  )
}

export default FeedbackList
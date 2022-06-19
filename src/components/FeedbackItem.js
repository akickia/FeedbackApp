import Card from "./Card";
import {FaTimes, FaEdit} from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";



const FeedbackItem = ({item, handleDelete}) => {
  const { editFeedback } = useContext(FeedbackContext)
  
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className="close">
          <FaTimes color="#000" /> 
        </button>
        <button onClick={() => editFeedback(item)} className="edit"><FaEdit color="black" />
        </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
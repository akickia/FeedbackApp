import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";


function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
  }
  
  const deleteFeedback = (id) => {
    if(window.confirm("Are your sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }


  return (<BrowserRouter>
    <Header />
  <div className="container">
    <Routes>
      <Route
      exact
      path= "/"
      element= {
        <>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </>
        } /> 
    </Routes>
  
  </div>
  </BrowserRouter>
  )
}

export default App;

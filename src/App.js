import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {FeedbackProvider} from "./context/FeedbackContext"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  

  
  const deleteFeedback = (id) => {
    if(window.confirm("Are your sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }


  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path= "/"
              element= {
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList handleDelete={deleteFeedback} />
                  </>
                } 
            /> 
          </Routes>
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  )
}

export default App;

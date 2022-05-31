import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {FeedbackProvider} from "./context/FeedbackContext"
import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

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
            <Route path='/about' element={<AboutPage />}/>
          </Routes>
          <AboutIconLink />
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  )
}

export default App;

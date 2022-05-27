import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  
  
  return (<BrowserRouter>
    <Header />
  <div className="container">
    <Routes>
      <Route
      exact
      path= "/"
      element= {<FeedbackList feedback={feedback}/>} />
    </Routes>
  
  </div>
  </BrowserRouter>
  )
}

export default App;

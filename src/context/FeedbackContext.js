import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([])

  useEffect(() => {
    fetchFeedback();
  }, [])
//don't pass anything to the array cause loading feedbacks should only be done once.

  const fetchFeedback = async () => {
    const response = await fetch(`/feedback`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

const addFeedback = async (newFeedback) => {
  const response = await fetch (`/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newFeedback)
  });

  const data = await response.json();
  setFeedback([data, ...feedback]);
}

  return (
    <FeedbackContext.Provider value={{
      feedback, 
      isLoading,
      addFeedback,
      }}
      >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
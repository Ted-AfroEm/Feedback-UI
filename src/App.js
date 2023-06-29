import { FeedbackProvider } from "./context/FeedbackContext";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";

const App = () => {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
        <AboutIconLink />
      </div>
    </FeedbackProvider>
  );
};

export default App;

import { useState } from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext.tsx";
import Card from "./shared/Card";
import Button from "./shared/Button.tsx";
import RatingSelect from "./RatingSelect.tsx";

const FeedbackForm = ({ handleAdd }) => {
  const { addFeedback } = useContext(FeedbackContext);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  let handleTextChange = (e) => {
    setReview(e.target.value);
    if (review === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (review !== "" && review.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Review must be atlist 10 characters long.");
    } else {
      setBtnDisabled(false);
      setMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim().length > 10) {
      const newFeedback = {
        rating,
        text: review,
      };
      addFeedback(newFeedback);
      setReview("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would your rate a service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={review}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        <div className="message">{message}</div>
      </form>
    </Card>
  );
};

export default FeedbackForm;

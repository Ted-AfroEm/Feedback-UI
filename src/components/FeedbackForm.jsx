import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button.tsx";

const FeedbackForm = () => {
  const [review, setReview] = useState("");
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
  return (
    <Card>
      <form>
        <h2>How would your rate a service with us?</h2>
        {/* //TODO:rating select component */}
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

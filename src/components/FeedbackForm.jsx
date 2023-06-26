import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button.tsx";

const FeedbackForm = () => {
  const [review, setReview] = useState("");

  let handleTextChange = (e) => {
    setReview(e.target.value);
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
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;

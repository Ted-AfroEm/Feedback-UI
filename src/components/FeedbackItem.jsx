import { useState } from "react";

const FeedbackItem = ({ item }) => {
  return (
    <div className="card" key={item.id}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </div>
  );
};

export default FeedbackItem;

import React from "react";

const Notification = ({active, text, bgColor}) => {
  return (
    <div
      className="notification"
      style={{background: `${bgColor}`, opacity: active ? 1 : 0}}
    >
      <span>{text}</span>
    </div>
  );
};

export default Notification;

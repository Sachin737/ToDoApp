import React from "react";

//  convert date according to user location
const convertDate = (deadline) => {
  const date = new Date(deadline);

  const formattedDate = new Date(date).toLocaleString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  });
  return formattedDate;
};

const TaskCard = ({ title, description, deadline, createdAt }) => {
  console.log(deadline);
  const FormattedDeadline = convertDate(deadline);
  const FormattedCreatedAt = convertDate(createdAt);

  return (
    <div className="task-details">
      <h4>{title}</h4>
      <p className="deadline">
        <strong>deadline: </strong> {FormattedDeadline}
      </p>

      <p className="description">
        <strong>description: </strong>
      </p>

      <div className="description-box">{description}</div>

      <p className="createdAt">
        <strong>createdAt: </strong> {FormattedCreatedAt}
      </p>
    </div>
  );
};

export default TaskCard;

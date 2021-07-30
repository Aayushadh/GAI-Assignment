import React from "react";

const Alert = ({ alert, message }) => {
  const name_of_class = `bg-${alert}-100 border border-${alert}-400 text-${alert}-700 px-4 py-3 rounded relative`;
  return (
    <div className={name_of_class}>
      <strong className="font-bold">{message}</strong>
    </div>
  );
};

export default Alert;

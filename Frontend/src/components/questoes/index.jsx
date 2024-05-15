import React from "react";

const Question = ({ id, text, onChange, pergunta }) => {
  return (
    <div>
      <label>
        {id}. {pergunta}?
      </label>
      <input
        type="text"
        id={`question${id}`}
        name={`question${id}`}
        onChange={(e) => onChange(id, e.target.value)}
      />
    </div>
  );
};

export default Question;

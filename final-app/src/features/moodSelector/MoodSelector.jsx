import { moods } from "./MoodData.js";
import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
   
    margin: 5px;
    padding: 10px 20px;
    border-radius: 8px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: 0.2s;
  
   &:hover{
    color: red;
    background: #ff9900;
  

  .selected {
    border-color: #ff9900;
    background-color: teal;
  
`;

export default function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="mood-container-button">
      {moods.map((mood) => {
        return (
          <Button
            key={mood.id}
            className={selectedMood?.name === mood.name ? "selected" : ""}
            onClick={() => {
              setSelectedMood(mood.name);
            }}
          >
            {mood.icon}
            {mood.name}
          </Button>
        );
      })}
    </div>
  );
}

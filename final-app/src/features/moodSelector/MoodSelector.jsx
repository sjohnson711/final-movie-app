import { moods } from "./MoodData.js";
import { useState } from "react";

export default function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="mood-container-button">
      {moods.map((mood) => {
        return (
          <button
            key={mood.id}
            className={selectedMood?.name === mood.name ? "selected" : ""}
            onClick={() => {
              setSelectedMood(mood.name);
            }}
          >
            {mood.name}
          </button>
        );
      })}
    </div>
  );
}

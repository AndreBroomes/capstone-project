import React, { useState } from "react";

export default function Checkboxes() {

    const [topics, setTopics] = useState([]);


function componentDidMount() {
    fetch("/topics")
      .then((res) => res.json())
      .then((topics) => {
        setTopics();
      });
  }

  function handleChange(t) {
    setTopics(topics.map((topic) => {topic.id === t.id ? { ...topic, clicked: true } : topic})}
  handleTopicClick(t);

    return (
      <div>
        <form className="CheckboxSection">
          {topics.map((topic) => {
            return (
              <div>
                <label className="checkbox">
                  
                  <input
                    key={topic.id}
                    type="checkbox"
                    className="Checkbox"
                    value={topic.topic_name}
                    onClick={() => handleChange(topic)}
                  />
                  <span class="checkmark"></span>
                  {topic.topic_name}
                </label>
              </div>
            );
          })}

          <br></br>
        </form>
      </div>
    );
  }
import React from "react";
import Entry from "./Entry";
import emojip from "../emojipedia";

const createEntry = (emojiT) => {
  return (
    <Entry
      key={emojiT.id}
      emoji={emojiT.emoji}
      name={emojiT.name}
      meaning={emojiT.meaning}
    />
  );
};

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojip.map(createEntry)}</dl>
    </div>
  );
}

export default App;

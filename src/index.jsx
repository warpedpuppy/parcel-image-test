import { createRoot } from 'react-dom/client';
import React from 'react';
// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
  return (
    <div className="my-flix">
      <img src="IMG_1832.png" alt='dog' />
    </div>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);
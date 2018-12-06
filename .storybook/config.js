import { configure } from "@storybook/react";

// Automatically import all files ending in *.stories.js
const req = require.context(
  "../stories",
  true,
  /(.stories.jsx?$|.stories.tsx?$)/
);

function loadStories() {
  req.keys().forEach(filename => {
    console.log(filename);
    req(filename);
  });
}

configure(loadStories, module);

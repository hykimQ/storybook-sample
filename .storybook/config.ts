import { configure } from "@storybook/react";
import { addParameters } from "@storybook/react"; // <- or your storybook framework

addParameters({
  backgrounds: [
    { name: "twitter", value: "#00aced", default: true },
    { name: "facebook", value: "#3b5998" }
  ]
});

// automatically import all files ending in *.stories.tsx
const req = require.context("../stories", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);

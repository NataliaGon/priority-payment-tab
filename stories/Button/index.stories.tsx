import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../../src/components/Button";
//import * as markdown from '../../src/Button/Button.md';
import StoryBookContainer from "../../src/storybook/StoryBookContainer/StoryBookContainer";
import RTLContainer from "../../src/storybook/RTLContainer/RTLContainer";

storiesOf("Button", module).add("Basic Button", () => (
  <StoryBookContainer>
    <Button>Click me!</Button>
    <RTLContainer>
    	<Button>RTL Button</Button>
    </RTLContainer>
  </StoryBookContainer>
),
// {
// 	notes: {
// 		markdown: markdown
// 	}
// }
);

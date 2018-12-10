import React from "react";
import { storiesOf } from "@storybook/react";

import { SidePanel } from "../../src/components";
import StoryBookContainer from "../../src/storybook/StoryBookContainer/StoryBookContainer";
import RTLContainer from "../../src/storybook/RTLContainer/RTLContainer";

storiesOf("Side Panel", module).add("Side Panel", () => (
  <StoryBookContainer>
    <SidePanel title="Title in side panel"/>
  </StoryBookContainer>
),
);

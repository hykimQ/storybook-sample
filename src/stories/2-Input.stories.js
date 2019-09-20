import React from "react";

import { storiesOf, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Input } from "antd";
import { Button } from "@storybook/react/demo";

storiesOf("Input", module)
  .addDecorator(story => <div style={{ margin: "50px" }}>{story()}</div>)
  .add("default", () => <Input />)
  .add("disabled", () => <Input disabled />);

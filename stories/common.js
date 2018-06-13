import { storiesOf } from "@storybook/react";
import { host } from "storybook-host";
export function of(titleOrOpts) {
  if (!(typeof titleOrOpts === "string" || typeof titleOrOpts === "object")) {
    throw new Error(
      `of(opts) must be called with a string an object, received ${typeof titleOrOpts}`
    );
  }
  const titleOrOptsIsString = typeof titleOrOpts === "string";
  let title = titleOrOptsIsString ? titleOrOpts : titleOrOpts.title;
  if (!title) {
    throw new Error(
      'of(opts) was called without a title, call of with of({title: "story title"}) to add a title'
    );
  }
  let hostOpts = titleOrOptsIsString
    ? { title: titleOrOptsIsString }
    : titleOrOpts;

  return storiesOf(title, module).addDecorator(host(hostOpts));
}

import React from "react";

import { of } from "./common";

import Imgix from "../src";

of("<Imgix>")
  .add("default usage", () => (
    <Imgix
      src="https://assets.imgix.net/unsplash/bridge.jpg"
      defaultWidth={87}
      defaultHeight={87}
      fit="fill"
    />
  ))
  .add("as background", () => (
    <Imgix
      src="https://assets.imgix.net/unsplash/bridge.jpg"
      type="bg"
      fit="fill"
      imgProps={{
        style: {
          width: 300,
          height: 200
        }
      }}
    />
  ))
  .add("dpr=2", () => (
    <Imgix
      src="https://assets.imgix.net/unsplash/bridge.jpg"
      fit="fill"
      customParams={{
        dpr: 2
      }}
      imgProps={{
        style: {
          width: 300,
          height: 200
        }
      }}
    />
  ));

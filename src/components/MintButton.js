import * as React from "react";

const MintButton = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={300}
    height={60}
    viewBox="0 0 300 60"
    {...props}
  >
    <defs>
      <style>
        {
          "\n      .cls-1 {\n        font-size: 30px;\n        fill: #fff;\n        font-family: Algerian;\n      }\n    "
        }
      </style>
    </defs>
    <image
      x={8}
      width={284}
      height={60}
      xlinkHref="data:img/png;base64,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"
    />
    <image
      x={13}
      y={-8}
      width={281}
      height={63}
      xlinkHref="data:img/png;base64,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"
    />
    <text
      id="Mint_Page"
      data-name="Mint Page"
      className="cls-1"
      x={77.361}
      y={40.118}
    >
      {"Mint Page"}
    </text>
  </svg>
);

export default MintButton;
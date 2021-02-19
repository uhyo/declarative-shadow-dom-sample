import { castella, css, html, slot } from "@castella/macro";

export const Footer = castella(
  css`
    footer {
      display: block;
      border-top: 1px solid #cccccc;
      margin-top: 2rem;
      padding-top: 2rem;
    }
  `,
  html`<footer>${slot()}</footer>`
);

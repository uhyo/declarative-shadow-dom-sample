import { castella, css, html, slot } from "@castella/macro";

export const Link = castella(
  css`
    color: #136ca4;
  `,
  html`${slot()}`
);

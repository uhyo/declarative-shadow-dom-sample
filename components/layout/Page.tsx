import { castella, css, html, slot } from "@castella/macro";

export const Page = castella(
  css`
    display: block;
    margin: 0 auto;
    max-width: 800px;

    header {
      height: 3rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
    }
    h1 {
      font-size: 2rem;
      font-weight: bold;
    }
    main {
      padding: 1rem;
      font-family: serif;
    }
  `,
  html`
    <header>
      <h1>${slot("title")}</h1>
    </header>
    <main>${slot()}</main>
  `
);

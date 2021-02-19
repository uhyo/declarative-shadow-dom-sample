import { castella, css, html, slot } from "@castella/macro";

export const Section = castella(
  css`
    section {
      margin: 1rem 0;
      padding: 0.5rem 1rem;
      border: 1px solid #cccccc;
      border-radius: 0.5rem;
    }

    h1 {
      margin: 0 0 0.5rem 0;
      font-size: 1.5rem;
      font-family: var(--sans-serif);
      font-weight: bold;
    }
    main {
      font-family: serif;
      display: flex;
      flex-flow: column nowrap;
      gap: 1rem;
    }
  `,
  html`
    <section>
      <h1>${slot("title")}</h1>
      <main>${slot()}</main>
    </section>
  `
);

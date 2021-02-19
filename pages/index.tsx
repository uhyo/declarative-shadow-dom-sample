import Head from "next/head";
import { Link } from "../components/layout/Link";
import { Page } from "../components/layout/Page";
import { Section } from "../components/layout/Section";

export default function Home() {
  return (
    <Page title="Declarative Shadow DOM Sample">
      <Head>
        <title>Declarative Shadow DOM Sample</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
        This page uses Shadow DOM for styling. If you open this page with a
        browser that does not support Declarative Shadow DOM, you should observe
        a Flash Of Unstyled Content.
      </p>

      <Section title="What is Declarative Shadow DOM?">
        <p>
          A markup-based way of attaching a shadow DOM to an element. It allows
          us to serialize elements with shadow DOM into an HTML string, which
          enables server-side rendering of contents made up of Shadow DOM.
        </p>
        <p>
          Read more at{" "}
          <Link>
            <a href="https://web.dev/declarative-shadow-dom/">
              Declarative Shadow DOM - web.dev
            </a>
          </Link>
        </p>
      </Section>

      <Section title="How is this page made?">
        <p>
          <Link>
            <a href="https://github.com/uhyo/castella">Castella</a>
          </Link>
          , a CSS-in-JS library with Declarative Shadow DOM support, is used.
          This page is server-side-rendered with Next.js.
        </p>
      </Section>
    </Page>
  );
}

import Document, { Html, Head, Main, NextScript } from "next/document";

export const config = {
  unstable_runtimeJS: false,
};

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <div className="container">
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
          <hr />
          <footer>🐕‍🦺</footer>
        </div>
      </Html>
    )
  }
}

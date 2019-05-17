import App, { Container } from "next/app";
import { BrsProvider } from "../components/context/brscontext";

export default class CApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <BrsProvider>
          <Component {...pageProps} />
        </BrsProvider>
      </Container>
    );
  }
}

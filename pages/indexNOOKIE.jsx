import nookies from "nookies";

export default class Me extends React.Component {
  static async getInitialProps(ctx) {
    // Parse
    nookies.get(ctx);

    // Set
    nookies.set(ctx, "token", token, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/"
    });

    // Destory
    nookies.destroy(ctx, "token");
  }

  render() {
    return <div>My profile</div>;
  }
}

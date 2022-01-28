module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/postable",
        destination: "https://www.postable.com/marytim",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

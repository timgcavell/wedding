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
      {
        source: "/honeymoon",
        destination: "https://www.zola.com/registry/maryandtimwedding",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

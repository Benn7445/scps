/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/sc/:team/:id",
        destination: "https://www.sofascore.com/:team/:id",
      },
    ];
  },
};

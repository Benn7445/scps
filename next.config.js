/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/sc/:id",
        destination: "https://api.sofascore.com/api/v1/event/:id/h2h/events",
      },
    ];
  },
};

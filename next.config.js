/** @type {import('next').NextConfig} */
const nextConfig = {
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "src/shared/assets/styles")],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  env: {
    STRAPI_URL: "http://127.0.0.1:1337",
    BASE_URL: "http://localhost:3000",
    STRAPI_TOKEN:
      "4c9e5e1bf9fbfbf72e5c7594712855a2dc248210797b989bcf7ada3dc5dd7b82422273c4fea0a63a15bcb844ccae2f84f78f3a62ce0e3df959bff9c004dcca14d1bab2d047de367d1f9ce53239f15c9a27a258ecd43cc516b9e3643208916398ab1c10c21cc3f91749b931d13854c423e43378193f5c501e1980b605fb076fae",
  },
};

module.exports = nextConfig;

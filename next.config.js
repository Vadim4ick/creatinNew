/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    STRAPI_URL: "http://127.0.0.1:1337",
    BASE_URL: "http://localhost:3000",
    STRAPI_TOKEN:
      "4c9e5e1bf9fbfbf72e5c7594712855a2dc248210797b989bcf7ada3dc5dd7b82422273c4fea0a63a15bcb844ccae2f84f78f3a62ce0e3df959bff9c004dcca14d1bab2d047de367d1f9ce53239f15c9a27a258ecd43cc516b9e3643208916398ab1c10c21cc3f91749b931d13854c423e43378193f5c501e1980b605fb076fae",
    // STRAPI_TOKEN:
    //   "ba8fe03d2d1039b2baa2d8cd845f9ee9f58d3a2a076e5e875307824104a0f136579c3a4b394336cec63cae46762b2f39e1d5a4ecefc68d8e6ad13c93fc7518f37b1a90ba87ff3f55cfd8585030a6d301104f5e5e076590d949f526e81fad0d195758fcf8c77515f083dde86831a91316498537e7858f587cd1411c6fc6aa8053",

    //v2
    // RECAPTCHA_SITE_KEY: "6LcVAlIpAAAAAH-Q82o26CZILA6hgkTHqVagt4lZ",
    // RECAPTCHA_SECRET_KEY: "6LcVAlIpAAAAAIz_LL7cVp05a3yjrsCLu_FpaxVq",

    RECAPTCHA_SITE_KEY: "6LdrBVIpAAAAAPb3qqxGLYSTUmdxQeKfVC7154nD",
    RECAPTCHA_SECRET_KEY: "6LdrBVIpAAAAAD1TqLRYrT1ZgF_Fiu5hkMP986mQ",
  },
};

module.exports = nextConfig;

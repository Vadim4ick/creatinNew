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
    STRAPI_URL: "https://strapi.creatin.ru",
    STRAPI_TOKEN:
      "954e880b6a50e2502a5ad4d53ca1082c5da1c916eaf72a97487a48149a30444a2cc1dfdd3c3f05274fee3c4d2c32bd38c092ed5049ed2c1853708cf2d6737a183922b1263cb0ec1dd87c4ca8ea134cafa197df04f78efeae941818ff9278345511b3b5e7b0753634f369667a5b0afb7513f49ff54804d0766d3c02c7bd4bafdc",
    // STRAPI_TOKEN: process.env.STRAPI_TOKEN,
    // STRAPI_URL: process.env.STRAPI_URL,

    RECAPTCHA_SITE_KEY: "6LdrBVIpAAAAAPb3qqxGLYSTUmdxQeKfVC7154nD",
    RECAPTCHA_SECRET_KEY: "6LdrBVIpAAAAAD1TqLRYrT1ZgF_Fiu5hkMP986mQ",
  },
};

module.exports = nextConfig;

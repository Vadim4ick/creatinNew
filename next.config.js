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
    STRAPI_URL: "https://creatinserver.onrender.com",
    STRAPI_TOKEN:
      "6239c09daa33bfb66dcb2dc8d289ecddc01daa98903b1ef10088b49dd3c619410b650dae08d44ba3ba275af52029213142075679e30603617bed51fb4d30425e3fbec5efbc5c394599a8b3d520e499e510ff874cdf4972d82790d541d92d3da112916610d639ac612f83985b9141bb5f533d91d5ba8b24d1bc5d6237be29e93c",
  },
};

module.exports = nextConfig;

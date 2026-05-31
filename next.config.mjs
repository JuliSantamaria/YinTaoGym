/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/YinTaoGym" : "";
<<<<<<< HEAD

=======
>>>>>>> dd937d933a8d7066aa632d6c22ea3bbd8266a0a1
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

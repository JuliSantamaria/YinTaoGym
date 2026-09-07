/** @type {import('next').NextConfig} */
// El basePath SOLO es necesario en GitHub Pages (sitio servido bajo /YinTaoGym).
// En Vercel o dominio propio la web va en la raíz, así que debe quedar vacío.
// El workflow de GitHub Pages debe exportar GITHUB_PAGES=true al hacer el build.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/YinTaoGym" : "";
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

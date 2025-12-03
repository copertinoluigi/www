/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- QUESTA RIGA È FONDAMENTALE PER NETLIFY
  images: {
    unoptimized: true, // Necessario se usi il componente <Image> in modalità export
  },
};

export default nextConfig;

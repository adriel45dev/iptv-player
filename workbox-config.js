module.exports = {
  globDirectory: "public/",
  globPatterns: [
    "**/*.{html,json,js,css}", // Adapte esta linha conforme necessário para incluir outros tipos de arquivo
  ],
  swDest: "public/sw.js",
  skipWaiting: true,
  clientsClaim: true,
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|gif|jpg|jpeg|svg)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "images",
        expiration: {
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        },
      },
    },
    {
      // Cache para arquivos CSS e JavaScript
      urlPattern: /\.(?:js|css)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources",
      },
    },
    {
      // Caching para APIs ou dados dinâmicos
      urlPattern: /alguma-api-aqui/,
      handler: "NetworkFirst",
      options: {
        cacheName: "api-cache",
        networkTimeoutSeconds: 10, // Tenta a rede primeiro, mas usa cache se a resposta demorar mais de 10 segundos
      },
    },
  ],
};

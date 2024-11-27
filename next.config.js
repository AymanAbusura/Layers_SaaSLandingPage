const nextConfig = {
  webpack: (config) => {
    config.cache = false; // Disable caching
    return config;
  },
};

module.exports = nextConfig;
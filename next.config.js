module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
    });
    config.resolve.fallback = { fs: false };
    return config;
  },
};

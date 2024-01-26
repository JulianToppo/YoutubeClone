const path = require("path");

console.log("Webpack configuration file is being executed...");

const resolveFallback = {
  zlib: require.resolve("browserify-zlib"),
  querystring: require.resolve("querystring-es3"),
  path: require.resolve("path-browserify"),
  crypto: require.resolve("crypto-browserify"),
  fs: false,
  stream: require.resolve("stream-browserify"),
  net: false,
  http: require.resolve("stream-http"),
};

console.log("Resolve fallback configuration:", resolveFallback);

module.exports = {
  resolve: {
    fallback: resolveFallback,
  },
};

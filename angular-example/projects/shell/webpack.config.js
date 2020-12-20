const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
    uniqueName: "shell",
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        app1: "app1@http://localhost:4201/remoteEntry.js",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"],
    }),
  ],
};

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "shell",
  },
  optimization: {
    // Only needed to bypass a temporary bug in the
    // cli/webpack5 integration
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        app1: "app1@http://localhost:4201/remoteEntry.js",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"],
      // Alternative
      // shared: {
      //   "@angular/core": { singleton: true, strictVersion: true },
      //   "@angular/common": { singleton: true, strictVersion: true },
      //   "@angular/router": { singleton: true, strictVersion: true },
      // },
    }),
  ],
};

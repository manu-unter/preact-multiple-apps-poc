export default (config, env, helpers) => {
  delete config.entry.polyfills;
  config.output.filename = "[name].js";
  // This is required for not colliding with other possibly lazy-loading applications in the same document
  // See https://webpack.js.org/configuration/output/#outputjsonpfunction
  config.output.jsonpFunction = 'wpJsonpMyWidgetWithANonCollidingName';

  let { plugin } = helpers.getPluginsByName(config, "ExtractTextPlugin")[0];
  plugin.options.disable = true;

  if (env.production) {
    config.output.libraryTarget = "umd";
  }
};

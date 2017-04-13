module.exports = {
  cache: {
    cacheId: "event-manager",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "event-manager",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};

module.exports = function(eleventyConfig) {
  // Copy assets directory to output
  eleventyConfig.addPassthroughCopy("assets");
  
  // Set development server options
  eleventyConfig.setServerOptions({
    port: 8080,
    host: "127.0.0.1",
    showAllHosts: true
  });
  
  // Set input and output directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};
module.exports = function(eleventyConfig) {
  // Copy assets folder to output
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Copy favicon files if they exist
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  
  // Add .nojekyll file to prevent Jekyll processing on GitHub Pages
  eleventyConfig.addPassthroughCopy({".nojekyll": ".nojekyll"});
  
  // Set input and output directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["njk", "html", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
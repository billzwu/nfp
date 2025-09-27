module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/images");

  // Copy Google verification file to root
  eleventyConfig.addPassthroughCopy({"src/pages/google48f47a945c6ffe4c.html": "google48f47a945c6ffe4c.html"});

  // Exclude Google file from normal page processing
  eleventyConfig.ignores.add("src/pages/google48f47a945c6ffe4c.html");

  // Configure directories
  return {
    dir: {
      input: "src",
      includes: "layouts",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
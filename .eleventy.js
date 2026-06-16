const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Statyczne assety kopiowane 1:1 do _site
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");

  // Bieżący rok do stopki (np. "© 2026 ...")
  eleventyConfig.addGlobalData("rok", () => new Date().getFullYear());

  // To jest dokumentacja dla osoby wgrywającej zdjęcia, nie strona — nie budować jej jako strony
  eleventyConfig.ignores.add("src/img/README.md");

  // Filtr formatujący daty po polsku, np. "16 czerwca 2026"
  eleventyConfig.addFilter("polskaData", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .setLocale("pl")
      .toFormat("d MMMM yyyy");
  });

  // Kolekcja ogłoszeń — najnowsze na górze
  eleventyConfig.addCollection("ogloszenia", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/ogloszenia/*.md")
      .sort((a, b) => b.data.data - a.data.data);
  });

  // Kolekcja intencji — najnowszy tydzień na górze
  eleventyConfig.addCollection("intencje", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/intencje/*.md")
      .sort((a, b) => b.data.tydzienOd - a.data.tydzienOd);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    // GitHub Pages serwuje to repo z https://wynalazca382.github.io/strona-parafialna/
    pathPrefix: "/strona-parafialna/",
  };
};

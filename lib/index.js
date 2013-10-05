var relations = {};

module.exports = function (params, callback) {
  var grunt = params.grunt;
  var async = grunt.util.async;
  var _ = grunt.util._;

  var context = params.context;
  var page = context.page;
  var pages = context.pages;

  page.related = page.related || [];
  var tags = page.data.tags || [];

  async.forEachSeries(pages, function (otherPage, next) {
    if (page.src === otherPage.src) {
      next();
      return;
    }
    relations[page.src] = relations[page.src] || [];
    relations[otherPage.src] = relations[otherPage.src] || [];
    if (relations[page.src].indexOf(otherPage.src) !== -1 || relations[otherPage.src].indexOf(page.src) !== -1) {
      next();
      return;
    }
    var otherTags = otherPage.data.tags || [];
    var related = false;
    tags.forEach(function (tag) {
      if (related) {
        return;
      }
      if (otherTags.indexOf(tag) !== -1) {
        related = true;
      }
    });
    if (related) {
      otherPage.related = otherPage.related || [];
      // use `omit` to prevent recursion error
      page.related.push(_.omit(otherPage, ['related']));
      otherPage.related.push(_.omit(page, ['related']));
      relations[page.src].push(otherPage.src);
      relations[otherPage.src].push(page.src);
    }
    next();
  }, function (err) {
    callback();
  });
};

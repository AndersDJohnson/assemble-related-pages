# assemble-related-pages [![NPM version](https://badge.fury.io/js/assemble-related-pages.png)](http://badge.fury.io/js/assemble-related-pages)

An [Assemble](http://assemble.io) plugin for generating lists of related pages. 

Current implementation uses tags, and defines related pages as those that share at least one tag.

For now, this depends on [my modified version of Assemble](https://github.com/adjohnson916/assemble), which supports plugins. Hopefully that makes it into Assemble proper ([see my pull request](https://github.com/assemble/assemble/pull/325)).

```sh
npm install --save-dev git://github.com/adjohnson916/assemble#master
```

## Usage

First, setup a project with Grunt and Assemble.

Then install the plugin: 

```sh
npm install --save-dev assemble-related-pages
```

Add the plugin to your Grunt assemble config:

```js
assemble: {
  options: {
    plugins: [ require('assemble-related-pages')() ]
  },
  pages: {
    src: ['docs/*.hbs'],
    dest: './'
  }
},
```

Use `tags` in your pages.

Then, anywhere you like, add something like the following to your layouts and/or pages:

```handlebars
  {{#each page.related}}
    <li>
      <a href="{{relative ../page.dest this.dest}}">{{this.data.title}}</a>
    </li>
  {{/each}}
```

## Examples

See `example/1/src` and the `assemble:example_1` task in `Gruntfile.js`.

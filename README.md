# assemble-plugin-related-pages

[![NPM version](https://badge.fury.io/js/assemble-plugin-related-pages.png)](http://badge.fury.io/js/assemble-plugin-related-pages)
[![NPM dependencies](https://david-dm.org/adjohnson916/assemble-plugin-related-pages.png)](https://david-dm.org/adjohnson916/assemble-plugin-related-pages)

An [Assemble](http://assemble.io) plugin for generating lists of related pages. 

Current implementation uses tags, and defines related pages as those that share at least one tag.

## Usage

First, setup a project with Grunt and Assemble.

Then install the plugin: 

```sh
npm install --save-dev assemble-plugin-related-pages
```

Add the plugin to your Grunt assemble config:

```js
assemble: {
  options: {
    plugins: [ 'assemble-plugin-related-pages' ]
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

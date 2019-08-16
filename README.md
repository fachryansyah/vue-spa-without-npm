# Vue SPA without NPM & Webpack
This is simple boilerplate for develop vuejs projects without NPM & Webpack.

## Usage
``` bash
$ git clone https://github.com/fachryansyah/vue-spa-without-npm.git
```

## Customize
### Adding 3rd Library
You can add 3rd libraries or plugin stored in src/lib/here. and register your libraries to config.js
example using jQuery.
``` JavaScript
require.config({
    baseUrl: "src",
    paths: {
        // from libs
		jQuery: "lib/jquery.min"
    }
})
```

And register again in main.js like this.
``` JavaScript
require(["config"], function() {
    require(["app", "Uikit", "UikitIcons", "jQuery"])
})
```

### Setting route
For setting route page you must register that page stored in src/pages to config.js
``` JavaScript
require.config({
    baseUrl: "src",
    paths: {
        ...
        // from pages
        HomePage: "pages/Home.vue",
        ArticlePage: "pages/Article.vue",
		...
    }
})
```
so you can use on router.js like this.
``` JavaScript
define(function(require){
	...
// its your pages
    let HomePage = require("HomePage")
    let ArticlePage = require("ArticlePage")

    // define your route pages here..
    const routes = [
        {
            path: "/",
            component: HomePage,
            name: "Home"
        },
        {
            path: "/article",
            component: ArticlePage,
            name: "Article"
        }
    ]
	...
})

```

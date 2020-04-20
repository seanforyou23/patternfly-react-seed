# Patternfly Seed

Patternfly Seed is an open source build scaffolding utility for web apps. The primary purpose of this project is to give developers a jump start when creating new projects that will use patternfly. A secondary purpose of this project is to serve as a reference for how to configure various aspects of an application that uses patternfly, webpack, react, typescript, etc.

Out of the box you'll get an app layout with chrome (header/sidebar), routing, build pipeline, test suite, and some code quality tools. Basically, all the essentials.

<img width="1058" alt="Out of box dashboard view of patternfly seed" src="https://user-images.githubusercontent.com/5942899/62715686-fa954980-b9ce-11e9-9fc2-217b7a4d1d81.png">

## Quick-start
```bash
git clone https://github.com/patternfly/patternfly-react-seed # clone the project
cd patternfly-react-seed # navigate into the project directory
npm install # install patternfly-react-seed dependencies
npm run start:dev # start the development server
```
## Development Scripts

Install development/build dependencies
`npm install`

Start the development server
`npm run start:dev`

Run a production build (outputs to "dist" dir)
`npm run build`

Run the test suite
`npm run test`

Run the linter
`npm run lint`

Run the code formatter
`npm run format`

Launch a tool to inspect the bundle size
`npm run bundle-profile:analyze`

Start the express server (run a production build first)
`npm run start`

Start storybook component explorer
`npm run storybook`

Build storybook component explorer as standalone app (outputs to "storybook-static" dir)
`npm run build:storybook`

## Configurations
* [TypeScript Config](./tsconfig.json)
* [Webpack Config](./webpack.common.js)
* [Jest Config](./jest.config.js)
* [Editor Config](./.editorconfig)

## Raster Image Support

To use an image asset that's shipped with patternfly core, you'll prefix the paths with "@assets". `@assets` is an alias for the patternfly assets directory in node_modules.

For example:
```js
import imgSrc from '@assets/images/g_sizing.png';
<img src={imgSrc} alt="Some image" />
```

You can use a similar technique to import assets from your local app, just prefix the paths with "@app". `@app` is an alias for the main src/app directory.

```js
import loader from '@app/assets/images/loader.gif';
<img src={loader} alt="Content loading />
```

## Vector Image Support
Inlining SVG in the app's markup is also possible.

```js
import logo from '@app/assets/images/logo.svg';
<span dangerouslySetInnerHTML={{__html: logo}} />
```

You can also use SVG when applying background images with CSS. To do this, your SVG's must live under a `bgimages` directory (this directory name is configurable in [webpack.common.js](./webpack.common.js#L5)). This is necessary because you may need to use SVG's in several other context (inline images, fonts, icons, etc.) and so we need to be able to differentiate between these usages so the appropriate loader is invoked.
```css
body {
  background: url(./assets/bgimages/img_avatar.svg);
}
```

## Code Quality Tools
* For accessibility compliance, we use [react-axe](https://github.com/dequelabs/react-axe)
* To keep our bundle size in check, we use [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
* To keep our code formatting in check, we use [prettier](https://github.com/prettier/prettier)
* To keep our code logic and test coverage in check, we use [jest](https://github.com/facebook/jest)
* To ensure code styles remain consistent, we use [eslint](https://eslint.org/)
* To provide a place to showcase custom components, we integrate with [storybook](https://storybook.js.org/)

## Multi environment configuration
To set an environment variable based on development vs production mode, create an `.env` file in the root of the repo. Inside this file, specify a key that is set to a stringified object containing "development" and "production" properties, which hold the values you want to make available. For example;

```sh
API_ENDPOINT={"development": "http://dev.myendpoint.com", "production": "http://prod.myendpoint.com"}
```

The name of the key (in this case API_ENDPOINT) can be anything you want. To refer to this in your code, simply reference process.env.API_BASE. The key "API_BASE" is configurable from webpack.common.js in case you want to change it to something more relevant.

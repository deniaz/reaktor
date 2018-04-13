# Reaktor 🚀⚛️

> Reaktor is yet another React Starter Kit.

After using [Create React App](https://github.com/facebook/create-react-app) for quite a bit I ended up directly `yarn eject`-ing every single time after setting up a new project and spending way too much time configuring webpack / cleaning up webpack configurations. I also ended up not agreeing with some design decisions, the biggest being Create React App becoming a Monorepo, since it became really hard to fork and maintain just `react-scripts`.

Thus, Reaktor was born. And one day it might even be turned into a Yeoman generator.

## Installation

For now this is just a git repository and not a generator.

```
git clone git@github.com:deniaz/reaktor.git <your-project-name> && cd $_
rm -rf .git
```

Now it's all yours to init this as a new repository and tweak everything to your needs.

## Usage

There are a couple of scripts available:

### Starting Storybook

The repository is distributed with [Storybook](https://storybook.js.org/) by default to support the development of a **Design System**.
By default (see [Storybook Config](https://github.com/deniaz/reaktor/tree/master/config/storybook)) all JS files `*.stories.js` are loaded.

```
yarn start
```

### Starting React App

The complete React App can be run in browser with the help of [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin). The app, constructed and initialized [here](https://github.com/deniaz/reaktor/tree/master/src/index.j), is injected into a clean HTML page thanks to `webpack-dev-server`.

```
yarn develop
```

### Creating Production Build

A very basic (⚠️ still experimental) production build can be triggered with webpack. Needs improvement.

```
yarn build
```

## Philosophy

This repository was revitalised after reading [How we’re using Component Based Design](https://medium.com/@lewisplushumphreys/how-were-using-component-based-design-5f9e3176babb). I'm a big fan of Atomic Design but this article seemed pretty intuitive to me. So I figured I tried playing around with things and making up my mind on how I should move forward with this.

## Contents

Many things.

## Contributing

1.  Fork.
2.  Change Things.
3.  Create Pull Request.
4.  ???
5.  Profit.

I'm trying to keep this as minimal, but (re-)usable as possible. So I might accept some things and reject others, but everything's up for discussion.

## Credits

* [Create React App](https://github.com/facebook/create-react-app)
* [How we’re using Component Based Design](https://medium.com/@lewisplushumphreys/how-were-using-component-based-design-5f9e3176babb)

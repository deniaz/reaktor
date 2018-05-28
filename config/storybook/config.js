// Storybook Config
import { setOptions } from '@storybook/addon-options';
import { configure } from '@storybook/react';

// import { initScreenshot } from 'storybook-chrome-screenshot';

const req = require.context('../../src', true, /\.stories\.js$/);
const load = () => req.keys().forEach((filename) => req(filename));

setOptions({ sortStoriesByKind: true });
// addDecorator(initScreenshot);
configure(load, module);

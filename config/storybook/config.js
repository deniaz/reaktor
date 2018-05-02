// Storybook Config
import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

const req = require.context('../../src', true, /\.stories\.js$/);
const load = () => req.keys().forEach((filename) => req(filename));

setOptions({ sortStoriesByKind: true });

configure(load, module);

// Storybook Config
import { setOptions } from '@storybook/addon-options';
import { configure } from '@storybook/react';

const req = require.context('../../src', true, /\.stories\.js$/);
const load = () => req.keys().forEach((filename) => req(filename));

setOptions({ sortStoriesByKind: true });

configure(load, module);

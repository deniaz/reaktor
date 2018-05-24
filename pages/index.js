import React, { PureComponent } from 'react';

import { NextPage } from '../src/pages/next';

export default class extends PureComponent {
	static async getInitialProps({ pathname, query, asPath, req, res, jsonPageRes, err }) {
		return {
			foo: 'bar',
		};
	}

	render() {
		return <NextPage />;
	}
}

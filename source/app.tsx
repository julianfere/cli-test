import React from 'react';
import {CliRouter} from './context/CliRouter/index.js';
import {IRoute} from './context/CliRouter/types.js';
import Menu from './screens/Menu/index.js';
import Rails from './screens/Rails/index.js';

const ROUTES: IRoute[] = [
	{
		key: 'menu',
		screen: <Menu />,
		index: true,
	},
	{
		key: 'rails-api',
		screen: <Rails />,
	},
	{
		key: 'native-app',
		screen: <Menu />,
	},
	{
		key: 'react-app',
		screen: <Menu />,
	},
];

export default function App() {
	return <CliRouter routes={ROUTES} />;
}

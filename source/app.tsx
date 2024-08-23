import React from 'react';
import {CliRouter} from './context/CliRouter/index.js';
import {IRoute} from './context/CliRouter/types.js';
import Menu from './screens/Menu/index.js';
import Rails from './screens/Rails/index.js';
import Native from './screens/Native/index.js';
import ReactScreen from './screens/ReactApp/index.js';

const ROUTES: IRoute[] = [
	{
		index: true,
		key: 'menu',
		screen: <Menu />,
	},
	{
		key: 'rails-api',
		screen: <Rails />,
	},
	{
		key: 'native-app',
		screen: <Native />,
	},
	{
		key: 'react-app',
		screen: <ReactScreen />,
	},
];

export default function App() {
	return <CliRouter routes={ROUTES} />;
}

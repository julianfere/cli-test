import React, {createContext, useContext, useState} from 'react';
import {ICliRouterContext, IRoute} from './types.js';

const CliRouterContext = createContext<ICliRouterContext>({
	routes: [],
	navigate: () => {},
});

export const CliRouter = ({routes}: {routes: IRoute[]}) => {
	const [currentRoute, setCurrentRoute] = useState<IRoute | undefined>(
		routes.find(route => route.index),
	);

	const navigate = (key: string) => {
		const route = routes.find(route => route.key === key);
		if (route) {
			console.clear();
			setCurrentRoute(route);
		}
	};

	return (
		<CliRouterContext.Provider value={{routes, navigate}}>
			{currentRoute ? currentRoute.screen : null}
		</CliRouterContext.Provider>
	);
};

export const useCliNavigate = () => {
	const context = useContext(CliRouterContext);

	if (!context) {
		throw new Error('useCliNavigate must be used within a CliRouter');
	}

	return context.navigate;
};

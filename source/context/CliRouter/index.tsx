import React, {createContext, useContext, useMemo, useState} from 'react';
import {ICliRouterContext, IRoute} from './types.js';
import ScreenNotFound from './ScreenNotFound.js';

const CliRouterContext = createContext<ICliRouterContext>({
	routes: [],
	navigate: () => {},
});

export const CliRouter = ({routes}: {routes: IRoute[]}) => {
	const indexRoute = useMemo(
		() => routes.find(route => route.index) ?? null,
		[routes],
	);
	const [currentRoute, setCurrentRoute] = useState<IRoute | null>(indexRoute);

	const navigate = (key: string) => {
		const route = routes.find(route => route.key === key);
		// console.clear();
		setCurrentRoute(route || null);
	};

	return (
		<CliRouterContext.Provider value={{routes, navigate}}>
			{currentRoute?.screen || <ScreenNotFound />}
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

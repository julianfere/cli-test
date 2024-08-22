export interface IRoute {
	index?: boolean;
	key: string;
	screen: JSX.Element;
}

export interface ICliRouterContext {
	routes: IRoute[];
	navigate: (key: string) => void;
}

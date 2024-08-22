import React from 'react';

interface IContext {
	step: 1 | 2 | 3;
	option: string;
	setStep: (step: 1 | 2 | 3) => void;
	setOption: (option: string) => void;
}

export const Context = React.createContext<IContext | null>(null);

export const ContextProvider = ({children}: {children: React.JSX.Element}) => {
	const [step, setStep] = React.useState<1 | 2 | 3>(1);
	const [option, setOption] = React.useState('menu');

	const value = {
		step,
		option,
		setStep,
		setOption,
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAppContext = () => {
	const context = React.useContext(Context);

	if (!context) {
		throw new Error('useAppContext must be used within a AppContextProvider');
	}

	return context;
};

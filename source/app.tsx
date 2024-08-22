import React, {useEffect, useMemo} from 'react';
import {Box, Text, useApp, useFocus, useInput} from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import {useAppContext} from './context.js';

const OPTIONS = [
	{
		title: 'Rails Api',
		color: 'red',
		key: 'rails-api',
	},
	{
		title: 'Native App',
		color: 'green',
		key: 'native-app',
	},
	{
		title: 'React App',
		color: 'blue',
		key: 'react-app',
	},
];

const Option = ({
	text,
	color,
	onSelect,
}: {
	text: string;
	color: string;
	onSelect: () => void;
}) => {
	const {isFocused} = useFocus();

	const textColor = isFocused ? color : 'white';

	useEffect(() => {
		if (isFocused) {
			onSelect();
		}
	}, [isFocused]);

	return (
		<Text color={textColor} underline={isFocused}>
			{text}
		</Text>
	);
};

export default function App() {
	const {exit} = useApp();
	const {setOption, option, setStep, step} = useAppContext();

	const STEPS = {
		menu: (
			<>
				<Gradient colors={['#28358b', '#45157d', '#7d1b96']}>
					<BigText text="Templates" />
				</Gradient>
				<Text>
					Usa {'<Tab>'} para moverte entre opciones y {'<Enter>'} para
					seleccionar
				</Text>
			</>
		),
		'rails-api': (
			<>
				<Gradient colors={['#28358b', '#45157d', '#7d1b96']}>
					<BigText text="Rails" />
				</Gradient>
				{/* <Text>Seleccionaste la opción {option}</Text> */}
			</>
		),

		'react-app': (
			<>
				<Gradient colors={['#28358b', '#45157d', '#7d1b96']}>
					<BigText text="React" />
				</Gradient>
				{/* <Text>Creando {option}</Text> */}
			</>
		),

		'native-app': (
			<>
				<Gradient colors={['#28358b', '#45157d', '#7d1b96']}>
					<BigText text="Native" />
				</Gradient>
				{/* <Text>Creando {option}</Text> */}
			</>
		),
	};

	const options = useMemo(() => {
		return OPTIONS.map(option => (
			<Option
				key={option.key}
				text={option.title}
				color={option.color}
				onSelect={() => {
					setOption(option.key);
				}}
			/>
		));
	}, [OPTIONS]);

	useInput((input, key) => {
		if (input === 'q') {
			exit();
		}

		if (key.return) {
			setStep(option === 'menu' ? 2 : step === 2 ? 3 : 2);
		}
	});

	return (
		<Box display="flex" justifyContent="center" flexDirection="column">
			<Box
				display="flex"
				justifyContent="center"
				flexDirection="column"
				alignItems="center"
			>
				{step === 1 ? STEPS['menu'] : STEPS[option as keyof typeof STEPS]}
			</Box>
			<Box
				flexDirection="column"
				display="flex"
				gap={2}
				alignItems="center"
				marginTop={2}
			>
				{options}
			</Box>
		</Box>
	);
}

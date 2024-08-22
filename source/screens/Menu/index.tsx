import React, {useRef} from 'react';
import {Box, Text, useApp, useInput} from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import Option from '../../components/Option/index.js';
import {useCliNavigate} from '../../context/CliRouter/index.js';

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

export default function Menu() {
	const {exit} = useApp();
	const navigate = useCliNavigate();
	const optionRef = useRef('menu');

	useInput((input, key) => {
		if (input === 'q') {
			exit();
		}

		if (key.return) {
			navigate(optionRef.current);
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
				<Gradient colors={['#28358b', '#45157d', '#7d1b96']}>
					<BigText text="Templates" />
				</Gradient>
				<Text>
					Usa {'<Tab>'} para moverte entre opciones y {'<Enter>'} para
					seleccionar
				</Text>
			</Box>
			<Box
				flexDirection="column"
				display="flex"
				gap={1}
				alignItems="center"
				marginTop={2}
			>
				{OPTIONS.map(op => (
					<Option
						key={op.key}
						color={op.color}
						text={op.title}
						onSelect={() => {
							optionRef.current = op.key;
						}}
					/>
				))}
			</Box>
		</Box>
	);
}

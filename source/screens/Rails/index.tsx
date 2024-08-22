import React, {useState} from 'react';
import {Box, Text, useApp, useInput} from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

export default function Menu() {
	const {exit} = useApp();
	const [name, setName] = useState('');

	useInput((input, key) => {
		if (key.escape) {
			exit();
		}

		if (input) {
			if (key.return) {
				return;
			}

			setName(prevName => prevName + input);
		}

		if (key.delete || key.backspace) {
			setName(prevName => prevName.slice(0, -1));
		}

		if (key.return) {
			// setStep(option === 'menu' ? 2 : step === 2 ? 3 : 2);
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
				<Gradient colors={['#ff0000', '#ec3118', '#aa0a0a']}>
					<BigText text="Rails Api" />
				</Gradient>
			</Box>
			<Box flexDirection="column" display="flex" borderStyle="round">
				<Text>Nombre: {name}</Text>
			</Box>
		</Box>
	);
}

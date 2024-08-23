import {Box, Text, useApp, useInput} from 'ink';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import React from 'react';

const ScreenNotFound = () => {
	const {exit} = useApp();

	useInput((input, key) => {
		if (key.escape || input === 'q') {
			exit();
		}
	});
	return (
		<Box justifyContent="center" flexDirection="column" alignItems="center">
			<Gradient name="mind">
				<BigText text="Missing Screen" />
			</Gradient>
			<Gradient name="mind">
				<Text>Press 'q' to exit</Text>
			</Gradient>
		</Box>
	);
};

export default ScreenNotFound;

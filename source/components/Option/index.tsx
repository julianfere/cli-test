import {useFocus, Text} from 'ink';
import React, {useEffect} from 'react';

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

export default Option;

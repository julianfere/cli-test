#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
// import meow from 'meow';
import App from './app.js';
import {ContextProvider} from './context.js';

// const cli = meow(
// 	`
// 	Usage
// 	  $ cli-test

// 	Options
// 		--name  Your name

// 	Examples
// 	  $ cli-test --name=Jane
// 	  Hello, Jane
// `,
// 	{
// 		importMeta: import.meta,
// 		flags: {
// 			name: {
// 				type: 'string',
// 			},
// 		},
// 	},
// );

const {waitUntilExit} = render(
	<ContextProvider>
		<App />
	</ContextProvider>,
);
await waitUntilExit();

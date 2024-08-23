#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import App from './app.js';
// import meow from 'meow';

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

const {waitUntilExit, clear} = render(<App />);

await waitUntilExit();

console.clear();
clear();

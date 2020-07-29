/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import IRichLanguageConfiguration = monaco.languages.LanguageConfiguration;
import ILanguage = monaco.languages.IMonarchLanguage;

export const conf: IRichLanguageConfiguration = {
	comments: {
		lineComment: '//',
		blockComment: ['/*', '*/'],
	},
	brackets: [
		['{', '}'],
		['[', ']'],
		['(', ')'],
		['begin', 'end'], 
		['case', 'endcase'], 
		['casex', 'endcase'], 
		['casez', 'endcase'], 
		['checker', 'endchecker'], 
		['class', 'endclass'], 
		['clocking', 'endclocking'], 
		['config', 'endconfig'], 
		['function', 'endfunction'], 
		['generate', 'endgenerate'], 
		['group', 'endgroup'], 
		['interface', 'endinterface'], 
		['module', 'endmodule'], 
		['package', 'endpackage'],
		['primitive', 'endprimitive'], 
		['program', 'endprogram'], 
		['property', 'endproperty'], 
		['specify', 'endspecify'], 
		['sequence', 'endsequence'], 
		['table', 'endtable'], 
		['task', 'endtask'], 

	],
	autoClosingPairs: [
		{ open: '[', close: ']' },
		{ open: '{', close: '}' },
		{ open: '(', close: ')' },
		{ open: '\'', close: '\'', notIn: ['string', 'comment'] },
		{ open: '"', close: '"', notIn: ['string'] },
	],
	surroundingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' },
		{ open: '\'', close: '\'' },
	],
	folding: {
		offSide: false,
		markers: {
			start: new RegExp("^(?:\\s*|.*(?!\\/[\\/\\*])[^\\w])(?:begin|case(x|z)?|class|clocking|config|covergroup|function|generate|interface|module|package|primitive|property|program|sequence|specify|table|task)\\b"),
			end: new RegExp("^(?:\\s*|.*(?!\\/[\\/\\*])[^\\w])(?:end|endcase|endclass|endclocking|endconfig|endgroup|endfunction|endgenerate|endinterface|endmodule|endpackage|endprimitive|endproperty|endprogram|endsequence|endspecify|endtable|endtask)\\b")
		}
	}
};

export const language = <ILanguage>{
	defaultToken: '',
	tokenPostfix: '.sv',

	brackets: [
		{ token: 'delimiter.curly', open: '{', close: '}' },
		{ token: 'delimiter.parenthesis', open: '(', close: ')' },
		{ token: 'delimiter.square', open: '[', close: ']' },
		{ token: 'delimiter.angle', open: '<', close: '>' }
	],

	keywords: [
		'accept_on', 'alias', 'always', 'always_comb', 'always_ff', 'always_latch', 'and', 'assert', 'assign', 'assume', 'automatic', 
		'before', 'begin', 'bind','bins', 'binsof', 'bit','break', 'buf', 'bufif0', 'bufif1', 'byte',
		'case', 'casex', 'casez', 'cell', 'chandle', 'checker', 'class', 'clocking', 'cmos', 'config', 'const', 'constraint', 'context', 'continue',
		'cover', 'covergroup', 'coverpoint', 'cross', 
		'deassign', 'default', 'defparam', 'design', 'disable', 'dist','do', 
		'edge', 'else', 'end', 'endcase', 'endchecker', 'endclass', 'endclocking', 'endconfig', 'endfunction', 'endgenerate', 'endgroup', 'endinterface', 'endmodule', 'endpackage',
		'endprimitive', 'endprogram', 'endproperty', 'endspecify', 'endsequence', 'endtable', 'endtask', 'enum', 'event', 'eventually', 'expect', 'export', 'extends', 'extern',
		'final', 'first_match', 'for', 'force', 'foreach', 'forever', 'fork', 'forkjoin', 'function', 
		'generate', 'genvar', 'global', 
		'highz0', 'highz1', 
		'if', 'iff', 'ifnone', 'ignore_bins', 'illegal_bins', 'implements', 'implies', 'import', 'incdir', 'include', 'initial', 'inout', 'input', 'inside', 
		'instance', 'int', 'integer', 'interconnect', 'interface', 'intersect', 
		'join', 'join_any', 'join_none', 
		'large', 'let', 'liblist', 'library', 'local', 'localparam', 'logic', 'longint',
		'macromodule', 'matches', 'medium',  'modport', 'module', 
		'nand', 'negedge', 'nettype', 'new', 'nexttime', 'nmos', 'nor', 'noshowcancelled', 'not', 'notif0', 'notif1', 'null', 
		'or', 'output', 
		'package', 'packed', 'parameter', 'pmos', 'posedge', 'primitive', 'priority', 'program', 'property', 'protected',
		'pull0', 'pull1', 'pulldown', 'pullup', 'pulsestyle_ondetect', 'pulsestyle_onevent', 'pure', 
		'rand', 'randc', 'randcase', 'randsequence', 'rcmos', 'real', 'realtime', 'ref', 'reg', 'reject_on', 'release', 'repeat', 
		'restrict', 'return', 'rnmos', 'rpmos', 'rtran', 'rtranif0', 'rtranif1', 
		's_always', 's_eventually', 's_nexttime', 's_until', 's_until_with', 'scalared', 'sequence', 'shortint', 'shortreal', 'showcancelled', 'signed', 'small', 'soft',
		'solve', 'specify', 'specparam', 'static', 'string', 'strong', 'strong0', 'strong1', 'struct', 'super', 'supply0', 'supply1', 'sync_accept_on', 'sync_reject_on',
		'table', 'tagged', 'task', 'this', 'throughout', 'time', 'timeprecision', 'timeunit', 'tran', 'tranif0', 'tranif1', 'tri', 'tri0', 'tri1', 'triand', 'trior', 'trireg', 'type', 'typedef', 
		'union', 'unique', 'unique0', 'unsigned','until', 'until_with', 'untyped', 'use', 'uwire', 
		'var', 'vectored', 'virtual', 'void', 
		'wait_order', 'wand', 'weak', 'weak0', 'weak1', 'while', 'wildcard', 'wire', 'with', 'within', 'wor', 
		'xnor', 'xor'
	],

	builtin_gates: [
		'and',
		'nand',
		'nor',
		'or',
		'xor',
		'xnor',
		'buf',
		'not',
		'bufif0',
		'bufif1',
		'notif1',
		'notif0',
		'cmos',
		'nmos',
		'pmos',
		'rcmos',
		'rnmos',
		'rpmos',
		'tran',
		'tranif1',
		'tranif0',
		'rtran',
		'rtranif1',
		'rtranif0'
  ],

	operators: [
		'=', '>', '<', '!', '~', '?', ':',
		'==', '<=', '>=', '!=', '&&', '||', '++', '--',
		'+', '-', '*', '/', '&', '|', '^', '%', '<<',
		'>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=',
		'^=', '%=', '<<=', '>>=', '>>>='
	],

	// we include these common regular expressions
	symbols: /[=><!~?:&|+\-*\/\^%]+/,
	escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
	integersuffix: /(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,
	floatsuffix: /[fFlL]?/,
	encoding: /u|u8|U|L/,
	identifier: /(?:[a-zA-Z_][a-zA-Z0-9_$\.]*|\\\S+ )/,

	// The main tokenizer for our languages
	tokenizer: {
		root: [
			// C++ 11 Raw String
			[/@encoding?R\"(?:([^ ()\\\t]*))\(/, { token: 'string.raw.begin', next: '@raw.$1' }],

			// module instances
			[/^(\s*)(@identifier)/, ['', {
				cases: {
					'@builtin_gates': { token: 'keyword.$1', next: '@module_instance'},
					'@keywords': { token: 'keyword.$1' },
					'@default': { token: 'identifier', next: '@module_instance'}
				}
			}]],

			// identifiers and keywords
			[/@identifier/, {
				cases: {
					'@keywords': { token: 'keyword.$0' },
					'@default': 'identifier'
				}
			}],

			// whitespace
			{ include: '@whitespace' },

			// [[ attributes ]].
			[/\[\[.*\]\]/, 'annotation'],

			[/^\s*`include/, { token: 'keyword.directive.include', next: '@include' }],

			// Preprocessor directive
			[/^\s*`\s*\w+/, 'keyword'],

			// delimiters and operators
			[/[{}()\[\]]/, '@brackets'],
			[/[<>](?!@symbols)/, '@brackets'],
			[/@symbols/, {
				cases: {
					'@operators': 'delimiter',
					'@default': ''
				}
			}],

			// numbers
			[/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
			[/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/, 'number.float'],
			[/[\dxXzZ]+[_\dxXzZ]*/, 'number'],
			[/'[sS]?[dD][0-9xXzZ?]+[0-9xXzZ_?]*/, 'number'],
			[/'[sS]?[bB][0-1xXzZ?]+[0-1xXzZ_?]*/, 'number.binary'],
			[/'[sS]?[oO][0-7xXzZ?]+[0-7xXzZ_?]*/, 'number.octal'],
			[/'[sS]?[hH][0-9a-fA-FxXzZ?]+[0-9a-fA-FxXzZ_?]*/, 'number.hex'],

			// delimiter: after number because of .\d floats
			[/[;,.]/, 'delimiter'],

			// strings
			[/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-terminated string
			[/"/, 'string', '@string'],

			// characters
			[/'[^\\']'/, 'string'],
			[/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
			[/'/, 'string.invalid']
		],

		module_instance: [
			{ include: '@whitespace' },
			// TODO - Need to fill out highlighting in the #(...) region
			[/\#\(.*?\)/, ''],
			[/@identifier/, 'type'],
			[/[\(#;]/, '', '@pop'],
		],

		whitespace: [
			[/[ \t\r\n]+/, ''],
			[/\/\*\*(?!\/)/, 'comment.doc', '@doccomment'],
			[/\/\*/, 'comment', '@comment'],
			[/\/\/.*$/, 'comment'],
		],

		comment: [
			[/[^\/*]+/, 'comment'],
			[/\*\//, 'comment', '@pop'],
			[/[\/*]/, 'comment']
		],
		//Identical copy of comment above, except for the addition of .doc
		doccomment: [
			[/[^\/*]+/, 'comment.doc'],
			[/\*\//, 'comment.doc', '@pop'],
			[/[\/*]/, 'comment.doc']
		],

		string: [
			[/[^\\"]+/, 'string'],
			[/@escapes/, 'string.escape'],
			[/\\./, 'string.escape.invalid'],
			[/"/, 'string', '@pop']
		],

		raw: [
			[/(.*)(\))(?:([^ ()\\\t]*))(\")/, {
					cases: {
						'$3==$S2': ['string.raw', 'string.raw.end', 'string.raw.end', { token: 'string.raw.end', next: '@pop' }],
						'@default': ['string.raw', 'string.raw', 'string.raw', 'string.raw']
					}
				}
			],
			[/.*/, 'string.raw']
		],

		include: [
			[/(\s*)(")([\w*\/*]*)(.\w*)(")/, ['', 'string.include.identifier', 'string.include.identifier', 'string.include.identifier', { token: 'string.include.identifier', next: '@pop'}]],
			[/(\s*)(<)([\w*\/*]*)(.\w*)(>)/, ['', 'string.include.identifier', 'string.include.identifier', 'string.include.identifier', { token: 'string.include.identifier', next: '@pop'}]]
		]
	},
};

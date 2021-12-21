module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	plugins: ['eslint-plugin-html'],
	extends: 'eslint:recommended',
	rules: {
		indent: ['error', 4],
		'no-unused-vars': 1,
		'no-use-before-define': 1,
		'no-redeclare': 1,
		'no-console': 0,
		'brace-style': [2, 'stroustrup'],
		'object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true,
			},
		],
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'no-constant-condition': 'off',
		'max-len': 'off',
		'import/prefer-default-export': 'off',
		'import/extensions': ['off'],
		'import/first': 'off',
		'object-curly-newline': 'off',
		'no-empty-function': 'off',
	},
};

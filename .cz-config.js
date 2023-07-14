module.exports = {
	types: [
		{ value: "feat", name: "feat: A new feature" },
		{ value: "fix", name: "fix: A bug fix" },
		{ value: "wip", name: "wip: Work in progress" },
		{
			value: "add",
			name: "add: Add a component to a feature",
		},
		{
			value: "docs",
			name: "docs: Documentation only changes",
		},
		{
			value: "perf",
			name: "perf: A code change that improves performance",
		},
		{ value: "test", name: "test: Adding missing tests" },
		{ value: "revert", name: "revert: Revert to a commit" },

		{
			value: "style",
			name: `style: Changes that do not affect the meaning of the code\n (white-space, formatting, missing semi-colons, etc)`,
		},
		{
			value: "refactor",
			name: `refactor: A code change that neither fixes a bug nor adds a feature`,
		},

		{
			value: "chore",
			name: `chore: Changes to the build process or auxiliary tools\n  and libraries such as documentation generation`,
		},
	],

	scopes: [{ name: "component" }, { name: "file" }],

	usePreparedCommit: false,
	allowTicketNumber: false,
	isTicketNumberRequired: false,
	typePrefix: "[",
	typeSuffix: "]",

	messages: {
		type: "Select the type of change that you're committing:",
		subject:
			"Write a SHORT, IMPERATIVE tense description of the change (requerid):\n",
		body: 'Provide a LONGER description of the change (requerid). Use "|" to break new line:\n',
		confirmCommit: "really want to carry out commit?",
	},

	allowCustomScopes: true,
	subjectLimit: 100,
	skipQuestions: ["footer", "breaking", "scope"],
}

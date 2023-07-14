import type { UserConfig } from "@commitlint/types"

const Configuration: UserConfig = {
	parserPreset: "conventional-changelog-conventionalcommits",
	rules: {
		"type-enum": [
			2,
			"always",
			[
				"build",
				"add",
				"wip",
				"chore",
				"ci",
				"docs",
				"feat",
				"fix",
				"perf",
				"refactor",
				"revert",
				"style",
				"test",
			],
		],
	},
}

module.exports = Configuration

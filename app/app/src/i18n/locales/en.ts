const defaultLocale =
[
	'What is {0}?',
	'See the upcoming events',
	'See last year\'s ranking',
	'Visit our website',
	'Join our Discord',
	// Info modal
	'Every 1st Friday of the month: a tournament!',
	'Discover the 12 tournaments of this year right now!',
	'Tournaments alternate between Solo and Team every month.',
	'Each tournament earns you points for an overall ranking that allows you to access the mystery prize!',
	'Do not get discouraged anymore, because in addition to a prize for the first place of the 2024 tournaments, each participation in a tournament earns you one more chance to win the consolation prize, which will also be revealed at the end of 2024!',
	'So, it\'s time for you to show your bravery! And good luck to everyone!',
	// Agenda modal
	'Here is the list of games that will be played during tournaments in 2024:',
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
	'Game of complicity',
	'MYSTERY GAME',
	'Blind Test of hell',
	'via {0} if possible.',
] as const

type Keys = typeof defaultLocale[number]
type Type = { [key in Keys]: key }

// Default locale uses the key as the value
const locale = defaultLocale
	.reduce<Type>((acc, key) =>
		{
			(acc as any)[key] = key
			return acc
		},
		{} as Type,
	)

export default locale as Readonly<typeof locale>

import type { I18n, Diff } from '../type'

const locale =
{
	'What is {0}?': 'Qu\'est-ce que {0} ?',
	'See the upcoming events': 'Voir les événements à venir',
	'See last year\'s ranking': 'Voir le classement de l\'année dernière',
	'Visit our website': 'Visite notre site web',
	'Join our Discord': 'Rejoins notre Discord',
} as const

// Static type check
export default locale satisfies
	// Check for missing keys:
	Readonly<Record<Diff<keyof I18n, keyof typeof locale>, string>> &
	// Check for extra keys:
	Readonly<Record<Diff<keyof typeof locale, keyof I18n>, never>>

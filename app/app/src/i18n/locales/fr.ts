import type { I18n, Diff } from '../type'

const locale =
{
	'What is {0}?': 'Qu\'est-ce que {0} ?',
	'See the upcoming events': 'Voir les événements à venir',
	'See last year\'s ranking': 'Voir le classement de l\'année dernière',
	'Visit our website': 'Visite notre site web',
	'Join our Discord': 'Rejoins notre Discord',
	'Every 1st Friday of the month: a tournament!':
		'Chaque 1er Vendredi du mois : un tournoi !',
	'Discover the 12 tournaments of this year right now!':
		'Découvrez les 12 tournois de l\'année dès maintenant !',
	'Tournaments alternate between Solo and Team every month.':
		'Les tournois alterne entre Solo et Team chaque mois.',
	'Each tournament earns you points for an overall ranking that allows you to access the mystery prize!':
		'Chaque tournois vous fait gagner des points pour un classement général qui vous permet d\'accéder au lot mystère !',
	'Do not get discouraged anymore, because in addition to a prize for the first place of the 2024 tournaments, each participation in a tournament earns you one more chance to win the consolation prize, which will also be revealed at the end of 2024!':
		'Ne vous découragez plus, car en plus d\'un lot pour le premier des tournois 2024, chaque participation à un tournoi vous fait gagner une chance de plus de gagner le lot de consolation, qui sera lui aussi dévoilé fin 2024 !',
	'So, it\'s time for you to show your bravery! And good luck to everyone!':
		'Alors, il est temps pour vous de montrer votre bravoure ! Et bonne chance à tous !',
} as const

// Static type check
export default locale satisfies
	// Check for missing keys:
	Readonly<Record<Diff<keyof I18n, keyof typeof locale>, string>> &
	// Check for extra keys:
	Readonly<Record<Diff<keyof typeof locale, keyof I18n>, never>>

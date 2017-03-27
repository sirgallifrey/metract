import StyleUtils from './styleUtils';

export default () => {

	const theme = {};

	theme.breakpoints = {
		xxs: 0,
		xs: 576,
		s: 768,
		m: 992,
		l: 1366
	};

	theme.spacings = {
		'0': 0,
		'1': 8,
		'2': 16,
		'3': 24,
		'4': 32,
		'5': 40,
		'6': 48,
		'7': 56,
		'8': 64,
		'9': 72,
		'10': 80
	};

	theme.colors = {
		'blue': '#3598DC',
		'yellow': '#F3C200',
		'purple': '#8E44AD',
		'red': '#D91E18',
		'white': '#ffffff',
		'black': '#000000',
		'lilac': '#E040FB',
		'light-grey-1': '#fafafa',
		'light-grey-2': '#f5f5f5',
		'light-grey-3': '#eeeeee',
		'light-grey-4': '#e0e0e0',
		'light-grey-5': '#bdbdbd',
		'grey': '#9e9e9e',
		'dark-grey-1':'#757575',
		'dark-grey-2':'#616161',
		'dark-grey-3':'#424242',
		'dark-grey-4':'#212121'
	};

	theme.shadows = {
		'1': '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
		'2': '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
		'3': '0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3)',
		'4': '0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3)',
		'5': '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)'
	};

	theme.shadowsInset = {
		'1': 'inset 0 2px 2px 0 rgba(0, 0, 0, 0.14), inset 0 1px 5px 0 rgba(0, 0, 0, 0.12), inset 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
		'2': 'inset 0 4px 5px 0 rgba(0, 0, 0, 0.14), inset 0 1px 10px 0 rgba(0, 0, 0, 0.12), inset 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
		'3': 'inset 0 6px 10px 0 rgba(0, 0, 0, 0.14), inset 0 1px 18px 0 rgba(0, 0, 0, 0.12), inset 0 3px 5px -1px rgba(0, 0, 0, 0.3)',
		'4': 'inset 0 8px 10px 1px rgba(0, 0, 0, 0.14), inset 0 3px 14px 2px rgba(0, 0, 0, 0.12), inset 0 5px 5px -3px rgba(0, 0, 0, 0.3)',
		'5': 'inset 0 16px 24px 2px rgba(0, 0, 0, 0.14), inset 0 6px 30px 5px rgba(0, 0, 0, 0.12), inset 0 8px 10px -5px rgba(0, 0, 0, 0.3)'
	};

	theme.grid = {
		base: 12,
		cellPadding: theme.spacings['2']
	};

	theme.buttons = {
		borderColor: 'transparent',
		borderWidth: '0',
		borderStyle: 'solid',
		colors: {
			'default': {
				bgColor: theme.colors.blue,
				color: theme.colors.white,
			},
			'danger': {
				bgColor: theme.colors.red,
				color: theme.colors.white
			},
			'warning': {
				bgColor: theme.colors.yellow,
				color: theme.colors.white
			},
			'success': {
				bgColor: theme.colors.purple,
				color: theme.colors.white
			},
			'link': {
				bgColor: 'transparent',
				color: theme.colors.blue
			},
			'lilac': {
				bgColor: theme.colors.lilac,
				color: theme.colors.white
			}
		}
	}

	theme.defaults = {
		fontSize: 16,
		borderRadius: 4,
		color: theme.colors.blue,
	}

	theme.defaults.outline = `0 0 1px 1px ${StyleUtils.shadeColor(theme.defaults.color, -0.15)}`

	return theme;
};
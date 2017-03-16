import StyleUtils from '../styleUtils';

export default class {

    constructor() {

        this.breakpoints = {
            xxs: 0,
            xs: 576,
            s: 768,
            m: 992,
            l: 1366
        };

        this.spacings = {
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

        this.colors = {
            'blue': '#3598DC',
            'yellow': '#F3C200',
            'purple': '#8E44AD',
            'red': '#D91E18',
            'white': '#ffffff',
            'black': '#000000',
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

        this.shadows = {
            '1': '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
            '2': '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
            '3': '0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3)',
            '4': '0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3)',
            '5': '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)'
        };

        this.shadowsInset = {
            '1': 'inset 0 2px 2px 0 rgba(0, 0, 0, 0.14), inset 0 1px 5px 0 rgba(0, 0, 0, 0.12), inset 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
            '2': 'inset 0 4px 5px 0 rgba(0, 0, 0, 0.14), inset 0 1px 10px 0 rgba(0, 0, 0, 0.12), inset 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
            '3': 'inset 0 6px 10px 0 rgba(0, 0, 0, 0.14), inset 0 1px 18px 0 rgba(0, 0, 0, 0.12), inset 0 3px 5px -1px rgba(0, 0, 0, 0.3)',
            '4': 'inset 0 8px 10px 1px rgba(0, 0, 0, 0.14), inset 0 3px 14px 2px rgba(0, 0, 0, 0.12), inset 0 5px 5px -3px rgba(0, 0, 0, 0.3)',
            '5': 'inset 0 16px 24px 2px rgba(0, 0, 0, 0.14), inset 0 6px 30px 5px rgba(0, 0, 0, 0.12), inset 0 8px 10px -5px rgba(0, 0, 0, 0.3)'
        };

        this.grid = {
            base: 12,
            cellPadding: this.spacings['2']
        };

        this.defaults = {
            fontSize: 16,
            borderRadius: 4,
            color: this.colors.blue,
            Button: {
                color: this.colors.white,
                borderColor: 'transparent',
                borderWidth: '0',
                borderStyle: 'solid',
                bgColor: this.colors.blue,
                colors: {
                    'danger': {
                        bgColor: this.colors.red,
                        color: this.colors.white
                    },
                    'warning': {
                        bgColor: this.colors.yellow,
                        color: this.colors.white
                    },
                    'success': {
                        bgColor: this.colors.purple,
                        color: this.colors.white
                    },
                    'link': {
                        bgColor: 'transparent',
                        color: this.colors.blue
                    }
                }
            }
        }
        this.defaults.outline = `0 0 0.01pt 0.01pt ${StyleUtils.shadeColor(this.defaults.color, -0.15)}`
    }
};
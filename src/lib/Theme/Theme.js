import { css } from 'glamor';
import Config from './Config';
import { getStyles as Button } from '../components/Buttons/Button'; 
import StyleUtils from '../styleUtils';


export default class {

    constructor(config) {

        this.config = config || new Config();
        this.styles = {
            Button
        }
        this.rules = {};
        //TODO: for now his warmup is fast but could grow slow due to large amount os sttyles to 'compile'.
        // solution for this is to make a lazy warmup, we culd even make a dirty prop if we want hot theme change.
        this.warmup();
    }

    warmup() {
        
        const { rules, styles, config } = this;
        
        for (let style in styles) {
            
            rules[style] = 'function' === typeof styles[style] ? styles[style](config, StyleUtils, css) : css(styles[style]);
        }
    }
}
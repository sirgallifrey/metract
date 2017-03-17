import { css } from 'glamor';
import Config from './Config';
import StyleUtils from '../styleUtils';


export default class {

    constructor(config) {

        this.config = config || new Config();
        this.rules = {};
    }

    setRules(key, getStylesFn) {

        if (this.rules[key]) {
            return this.rules[key];
        }
        this.rules[key] = getStylesFn(this.config, css, StyleUtils);
        return this.rules[key];
    }

    getRules(key) {

        return this.rules[key];
    }
}
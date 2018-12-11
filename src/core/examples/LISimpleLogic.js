import LInterface from '../LInterface';

export default class LISimpleLogic extends LInterface {
    static handleMap = {
        hfu: {
            hifu: { value: 'getTestState' },
            hefu: { click: 'handleClick' },
        },
    };
}
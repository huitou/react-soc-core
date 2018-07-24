// import PropTypes from 'prop-types';

export class ITrigger {
    constructor() {
        this.hefp = {
            handleEnable: undefined,
            handleTrigger: undefined,
        };
        this.hefc = {
            handleEnabled: undefined,
            handleTriggered: undefined,
        };
        this.hifp = {
            isEnabled: undefined,
            numberOfUpdate: undefined,
        };
    }

    registerHefp = (map) => {
        // console.log('registerHefp called with hefp map: ', map);
        this.hefp = map;
    };

    registerHifp = (map) => {
        // console.log('registerHifp called with hefp map: ', map);
        this.hifp = map;
    };

    registerHefc = (map) => {
        // console.log('registerHefc called with hefp map: ', map);
        this.hefc = map;
    };
}

import { Component } from 'react';
import PropTypes from 'prop-types';

import { ITrigger } from './interface-trigger';

export default class LTrigger extends Component {
    static propTypes = {
        extRole: PropTypes.string.isRequired,
        regr: PropTypes.func
    }

    static defaultProps = {
        regr: () => { console.log('default func.'); },
    }

    static extIClass = ITrigger;

    constructor(props) {
        super(props);
        this.extI = new LTrigger.extIClass();
        this.extI.registerHefp(this.hefpMap());
        this.extI.registerHifp(this.hifpMap());
    }

    hefpMap = () => ({
        handleEnable: this.handleEnable,
        handleTrigger: this.handleTrigger,
    });

    hifpMap = () => ({
        isEnabled: this.isEnabled,
        numberOfUpdate: this.numberOfUpdate,
    });


    state = {
        isEnabled: true,
        numberOfUpdate: 0,
    };

    updateNumber = () => {
        this.setState((state) => ({ numberOfUpdate: state.numberOfUpdate + 1 }));
    };


    handleEnable = (enabling) => {
        console.log('hefp handleEnable called:', enabling);
        this.setState({ isEnabled: enabling });
        this.extI.hefc.handleEnabled(enabling);
        this.updateNumber();
    }
    handleTrigger = () => {
        console.log('hefp handleTrigger called.');
        this.extI.hefc.handleTriggered();
        this.updateNumber();
    }

    isEnabled = () => {
        console.log('hifp isEnabled called:', this.state.isEnabled);
        return this.state.isEnabled;
    }

    numberOfUpdate = () => {
        console.log('hifp numberOfUpdate called:', this.state.numberOfUpdate);
        return this.state.numberOfUpdate;
    }

    regExtI = () => {
        this.props.regr(
            this.props.extRole,
            this.extI
        );
    };

    componentDidMount() {
        this.regExtI();
    }

    render() {
        return null;
    }
}

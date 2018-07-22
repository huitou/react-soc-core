import React, { Component, ReactFragment } from 'react';
import PropTypes from 'prop-types';

const ROLES = {
    TRIGGER: 'TRIGGER',
    MESSENGER: 'MESSENGER',
    // ...
};

class LComp extends Component {
    // Any LComp requires the following three props:
    static propTypes = {
        extI: { 
            role: PropTypes.string.isRequired,
            conn: PropTypes.object.isRequired,
            regr: PropTypes.func.isRequired,
        },
        intI: {
            [ROLES.TRIGGER]: PropTypes.shape({
                comp: PropTypes.element.isRequired,
                conn: PropTypes.func.isRequired,
              }).isRequired,
            [ROLES.MESSENGER]: PropTypes.shape({
                comp: PropTypes.element.isRequired,
                conn: PropTypes.func.isRequired,
              }).isRequired,
            // ...
        },
        // ...
    }

    constructor(props) {
        super(props);

        this.extI = {
            hefp: {
                onClick: this.handleClick,
                /* ... */
            },
            hifp: {
                triggerEnabled: this.triggerEnabled,
                counterNumber: this.counterNumber,
                /*  ... */
            },
            hefc: {
                /* to be set by parent's regr */
                handleCounterChange: undefined,
                handleTriggerEnabled: undefined,
            },
        };

        this.intI = {
            [ROLES.TRIGGER]: { /* to be registered by this component's regr */ },
            [ROLES.MESSENGER]: { /* to be registered by this component's regr */ },
            // ...
        };
    }

    state = {
        numberOfUpdate: 0,
    };

    // For extI:
    handleClick = () => {
        this.intI[ROLES.TRIGGER].hefp.onClick();
    }

    triggerEnabled = () => this.intI[ROLES.TRIGGER].hifp.enabled();
    counterNumber = () => this.intI[ROLES.MESSENGER].hifp.counterNumber();

    // For IntI:
    handleTriggerClicked = () => {
        this.setState((state) => ({ numberOfUpdate: state.numberOfUpdate + 1 }));
    };

    handleTriggerEnabled = (enabled) => {
        // ...
    };

    handleCounterChange = () => {
        this.setState((state) => ({ numberOfUpdate: state.numberOfUpdate + 1 }));
    };

    // ========================
    // Method to be overridden:
    // ------------------------
    // initialise hefc for events from int (child) interface:
    initHefc = (role, interface) => {
        switch (role) {
            case ROLES.TRIGGER:
                this.intI[ROLES.TRIGGER].hefc = {
                    onClicked: this.handleTriggerClicked,
                    onEnabled: this.handleTriggerEnabled,
                    /* … */
                };
                break;
            case ROLES.MESSENGER:
                this.intI[ROLES.MESSENGER].hefc = {
                    onNumberChange: this.handleCounterChange,
                    /* … */
                };
                break;
            default:
                // ...;
        }
    };
    
    // ========================
    // Method to be abstracted:
    // ------------------------
    // requests registering ext (parent) interface:
    regExtI = () => {
        this.props.extI.regr(
            this.props.extI.role,
            extI.conn.adapt(this.extI)
        );
    };

    // registers an int (child) interface:
    regIntI = (role, interface) => {
        this.intI[role] = interface;
        this.initHefc(role, interface);
    };
    
    componentDidMount() {
        this.regExtI();
    }
    
    render() {
        const LCompC_1 = this.intI[ROLES.TRIGGER].comp;
        const LConnC_1 = this.intI[ROLES.TRIGGER].conn;
        const LCompC_2 = this.intI[ROLES.MESSENGER].comp;
        const LConnC_2 = this.intI[ROLES.MESSENGER].conn;

        return (
            <ReactFragment>
                <LCompC_1 extI={{ role: ROLES.TRIGGER, conn: LConnC_1,  regr: this.regIntI }} />
                <LCompC_2 extI={{ role: ROLES.MESSENGER, conn: LConnC_2,  regr: this.regIntI }} />
            </ReactFragment>
        );
    }
}

export default LComp;
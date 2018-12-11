import React, { Component } from "react";
import PropTypes from 'prop-types';
import { shallow, mount } from "enzyme";

import { LInterfacedSimpleLogicComponent1 } from './examples/LInterfacedLogicComponents';
import { connect } from './connect';

class VisualComponent extends Component {
    static propTypes = {
        hifu: PropTypes.object.isRequired,
        hefu: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    state = { test: true };

    handleClick() {
        this.setState(
            (state) => ({ test: !state.test })
        );
    };

    render() {
        return (
            <div className='test' onClick={this.handleClick}>
                Test
            </div>
        );
    }
}

const NAME = 'Test';

describe("connect function", () => {
    describe("when called with a LModel class and a name parameters", () => {
        it("returns a wrapper function", () => {
            const wrapperFunction = connect(LInterfacedSimpleLogicComponent1, NAME);
            expect(typeof wrapperFunction).toBe('function');
        });
    });

    describe("when the returned wrapper function is called", () => {
        it("returns a function component", () => {
            const FunctionComponent = connect(LInterfacedSimpleLogicComponent1, NAME)(VisualComponent);
            expect(typeof FunctionComponent).toBe('function');
        });
    });

    describe("when the function component is mounted with proper props", () => {
        let FunctionComponent, enzymeWrapper, enzymeWrapper_WrapperComponent;
        beforeEach(() => {
            FunctionComponent = connect(LInterfacedSimpleLogicComponent1, NAME)(VisualComponent);
            enzymeWrapper = mount(<FunctionComponent />);
            enzymeWrapper_WrapperComponent = enzymeWrapper.find('Wrapper');
        });
        afterEach(() => {
            jest.clearAllMocks();
        });

        it("render the logic component and a Wrapper component with the wrapped visual component", () => {
            expect(enzymeWrapper_WrapperComponent.length).toBe(1);
            expect(enzymeWrapper.find('.test').length).toBe(1);
            expect(enzymeWrapper.find('VisualComponent').props()).toEqual({ hefu: {}, hifu: {} });
            expect(enzymeWrapper.find('.simpleLogicComponent1').length).toBe(1);
        });
    });
});

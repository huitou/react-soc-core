import React, { Component } from 'react';

import LInterface from './LInterface';
import { withLInterface } from './withLInterface';

import { shallow, mount } from 'enzyme';

class Placeholder extends Component {
    render() {
        return (<div></div>);
    }
}

describe('Core', () => {
    describe('when used without parameters href and role', () => {
        let InterfacedComponent;
        beforeEach(() => {
            InterfacedComponent = withLInterface(Placeholder, LInterface)();
        })

        it('mounts simply the component ignoring the interface', () => {
            const wrapper = shallow(<InterfacedComponent />);
            expect(wrapper.find(Placeholder).length).toEqual(1);
        });

        it('mounts simply the component ignoring the interface', () => {
            const wrapper = mount(<InterfacedComponent />);
            expect(wrapper.find(Placeholder).length).toEqual(1);
            expect(wrapper.find('div').length).toEqual(1);
        });
    });
});
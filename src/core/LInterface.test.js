import LInterface, { DEFAULT_HEFC, DEFAULT_ROLE } from './LInterface';

describe('LInterface', () => {

    describe('has its own definition of handle presence', () => {
        let interfaceInstance
        beforeEach(() => {
            interfaceInstance = new LInterface();
        })

        it('has NOT defined presence of any handles in its hefc', () => {
            expect(Object.keys(interfaceInstance._hefc_handle_presence).length).toEqual(0)
        });
        it('returns false on presence check of any handle on hefc', () => {
            expect(interfaceInstance._isHefcHandle('whatever')).toEqual(false)
        });

        it('has NOT defined presence of any handles in its hefp', () => {
            expect(Object.keys(interfaceInstance._hefp_handle_presence).length).toEqual(0)
        });
        it('returns false on presence check of any handle on hefp', () => {
            expect(interfaceInstance._isHefpHandle('whatever')).toEqual(false)
        });

        it('has NOT defined presence of any handles in its hifp', () => {
            expect(Object.keys(interfaceInstance._hifp_handle_presence).length).toEqual(0)
        });
        it('returns false on presence check of any handle on hifp', () => {
            expect(interfaceInstance._isHifpHandle('whatever')).toEqual(false)
        });

        it('throws an error on any hefc call', () => {
            expect(() => interfaceInstance.callHefc('whatever')).toThrow()
        });
    });

    describe(', when instantiated without parameters, ', () => {
        let interfaceInstance
        beforeEach(() => {
            interfaceInstance = new LInterface();
        })

        it('has a default role object', () => {
            expect(interfaceInstance.role()).toEqual(DEFAULT_ROLE)
        });

        it('has a default hefc object', () => {
            expect(interfaceInstance.hefc()).toEqual(DEFAULT_HEFC)
        });

        it('has NOT any handles in its hefc object', () => {
            expect(Object.keys(interfaceInstance.hefc()).length).toEqual(0)
        });

        it('returns false on availability check of any handle of Hefc', () => {
            expect(interfaceInstance._isHefcHandleAvailable('whatever')).toEqual(false)
        });
    });


    describe(', when instantiated without withLInterface function, ', () => {
        let interfaceInstance
        beforeEach(() => {
            interfaceInstance = new LInterface();
        })

        it('has NOT hefp object', () => {
            expect(interfaceInstance.hefp()).toEqual(undefined)
        });

        it('has NOT hifp object', () => {
            expect(interfaceInstance.hifp()).toEqual(undefined)
        });
    });
});
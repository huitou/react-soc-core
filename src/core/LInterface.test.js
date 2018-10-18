import LInterface, { DEFAULT_HEFC, DEFAULT_ROLE } from './LInterface';

describe('LInterface', () => {

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

        it('throws an error on any hefc call', () => {
            expect(() => interfaceInstance.callHefc('whatever', {})).toThrow()
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
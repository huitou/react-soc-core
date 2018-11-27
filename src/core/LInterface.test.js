import LInterface from './LInterface';

const NAME = 'TestInterface';
const parentChangeEventHandleMock = jest.fn();
const parentRegisterMock = jest.fn().mockReturnValue(parentChangeEventHandleMock);

describe('LInterface', () => {
    describe('instance, when properly instantiated with an object parameter,', () => {
        
        let interfaceInstance
        beforeEach(() => {
            interfaceInstance = new LInterface({ name: NAME, register: parentRegisterMock });
        })
        afterEach(() => {
            jest.clearAllMocks();
        });

        it('has _name assuming the value name passed in the parameter', () => {
            expect(interfaceInstance._name).toBe(NAME);
        });

        it('has called register once to register itself', () => {
            expect(parentRegisterMock).toHaveBeenCalledTimes(1);
            expect(parentRegisterMock).toHaveBeenCalledWith(interfaceInstance);
        });

        it('has _changeEventHandle assuming the value returned by register', () => {
            expect(interfaceInstance._changeEventHandle).toBe(parentChangeEventHandleMock);
        });

        it('has _isChangeEventSwitchOn assuming the value true', () => {
            expect(interfaceInstance._isChangeEventSwitchOn).toBe(true);
        });

        it('has _childLInterfaces assuming the value []', () => {
            expect(interfaceInstance._childLInterfaces).toEqual([]);
        });
    });

});
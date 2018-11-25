import LInterfaceWrapper from './LInterfaceWrapper';

// import LogicComponent from './LogicComponent';
import SimpleLogicComponent1 from './SimpleLogicComponent1';
import SimpleLogicComponent2 from './SimpleLogicComponent2';
import CompositeLogicComponent from './CompositeLogicComponent';

// export const LInterfacedLogicComponent = LInterfaceWrapper(LogicComponent);
export const LInterfacedSimpleLogicComponent1 = LInterfaceWrapper(SimpleLogicComponent1);
export const LInterfacedSimpleLogicComponent2 = LInterfaceWrapper(SimpleLogicComponent2);
export const LInterfacedCompositeLogicComponent = LInterfaceWrapper(CompositeLogicComponent);

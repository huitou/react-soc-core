import LInterfaceWrapper from './LInterfaceWrapper';

// import LogicComponent from './LogicComponent';
import CompositeLogicComponent from './CompositeLogicComponent';
import SimpleLogicComponent1 from './SimpleLogicComponent1';
import SimpleLogicComponent2 from './SimpleLogicComponent2';

import { withLInterface } from '../withLInterface';
import LISimpleLogic from './LISimpleLogic';
import SimpleLogicComponent3 from './SimpleLogicComponent3';


// export const LInterfacedLogicComponent = LInterfaceWrapper(LogicComponent);
export const LInterfacedCompositeLogicComponent = LInterfaceWrapper(CompositeLogicComponent);
export const LInterfacedSimpleLogicComponent1 = LInterfaceWrapper(SimpleLogicComponent1);
export const LInterfacedSimpleLogicComponent2 = LInterfaceWrapper(SimpleLogicComponent2);

export const LInterfacedSimpleLogicComponent3 = withLInterface(LISimpleLogic)(SimpleLogicComponent3);

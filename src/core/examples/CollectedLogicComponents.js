import CollectorWrapper from './CollectorWrapper';

// import LogicComponent from './LogicComponent';
import CompositeLogicComponent from './CompositeLogicComponent';
import SimpleLogicComponent1 from './SimpleLogicComponent1';
import SimpleLogicComponent2 from './SimpleLogicComponent2';

import { withCollector } from '../withCollector';
import LISimpleLogic from './LISimpleLogic';
import SimpleLogicComponent3 from './SimpleLogicComponent3';


// export const LInterfacedLogicComponent = CollectorWrapper(LogicComponent);
export const CollectedCompositeLogicComponent = CollectorWrapper(CompositeLogicComponent);
export const CollectedSimpleLogicComponent1 = CollectorWrapper(SimpleLogicComponent1);
export const CollectedSimpleLogicComponent2 = CollectorWrapper(SimpleLogicComponent2);

export const CollectedSimpleLogicComponent3 = withCollector(LISimpleLogic)(SimpleLogicComponent3);

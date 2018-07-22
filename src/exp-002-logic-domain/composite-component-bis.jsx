import { withChild } from './withChild';
import ParentComponent from './parent-component';
import ChildComponentBis from './child-component-bis';

const CompositeComponentBis = withChild(ChildComponentBis)(ParentComponent);

export default CompositeComponentBis;
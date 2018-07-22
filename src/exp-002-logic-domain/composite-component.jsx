import { withChild } from './withChild';
import ParentComponent from './parent-component';
import ChildComponent from './child-component';

const CompositeComponent = withChild(ChildComponent)(ParentComponent);

export default CompositeComponent;
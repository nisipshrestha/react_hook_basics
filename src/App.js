import './App.css';
import ContextAPIExample from './ContextAPI';

import Counter from './Counter';
import Custom_hooks from './CustomHooks';
import { HigherOrderComponents_RenderProps } from './HigherOrderComponents_RenderProps';
import RoutingExample from './Routing_example';
import UseCallbackExample from './User_callback';
import UseMemoExample from './Use_memo';
import UseRefExample from './Use_ref';



function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <UseMemoExample/> */}
      {/* <UseCallbackExample /> */}
      {/* <ContextAPIExample /> */}
      {/* <UseRefExample /> */}
      {/* <HigherOrderComponents_RenderProps text={123} /> */}
      {/* <Custom_hooks /> */}
      <RoutingExample />
    </div>
  );
}

export default App;

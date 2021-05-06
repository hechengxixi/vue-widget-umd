import XnUI from 'src';
import './App.css';



function App() {
  return (
    <div className="App">
      {/* 只能以 XnUI.xx 形式使用组件 */}
      <XnUI.Button name='test2' /> 
    </div>
  );
}

export default App;

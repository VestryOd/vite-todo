import './App.css';
import { Form, TodoList } from './components'

function App() {

  return (
    <>
      <Form />
      <TodoList todos={[]} />
    </>
  );
}

export default App;

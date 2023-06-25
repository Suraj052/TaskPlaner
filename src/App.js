
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { TodoWrapperLocalStorage } from './components/TodoWrapperLocalStorage';

function App() {
  return (
    <div className='App'>

      {/* For local storage to keep data persistant */}
        <TodoWrapperLocalStorage/>

      {/* To keep data non-persistant : only one time use */}
      {/* <TodoWrapper/> */}

    </div>
    
  );
}

export default App;

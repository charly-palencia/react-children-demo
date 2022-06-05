import {useState} from 'react';
import './App.css';
import ChildrenComponent from './components/Children';

const BLOCKS = [{counter: 0}, {counter: 0}, {counter: 0}];

function App() {
  const [blocks, setBlocks]= useState(BLOCKS)
  const [incrementIndex, setIncrementIndex] = useState(0);

  const handleIncrementIndex  =  () => {
    setIncrementIndex(incrementIndex + 1)
  }

  const handleChangeElement = (currentIndex) => () => {
    const updatedBlocks = blocks.map((block, index) => {
      if(index !== currentIndex)
        return block;

      return {
        ...block,
        counter: block.counter + 1,
      };
    })
    setBlocks(updatedBlocks);
  }


  return (
    <div className="App">
      <h1>Children Compontents</h1>

      <div className="button-container">
        <button onClick={handleIncrementIndex}>Update</button>
      </div>

      <div className="children-container">
        {blocks.map(({counter}, index) => <ChildrenComponent incremental={counter}  key={index + incrementIndex} position={index} onChangeElement={handleChangeElement(index)}/>
      )}
      </div>
    </div>
  );
}

export default App;

import './App.css';
import styled from 'styled-components';
import Home from './components/Home';
import Recipe from './components/Recipe';
import { useState } from 'react';

function App() {
  
  const [recipeToggle, setRecipeToggle] = useState(false);
  const [data, setData] = useState([]);
  
  return (
    <Wrap>
    <Home changeStatus={setRecipeToggle} changeData={setData} />
    { recipeToggle ? <Recipe data={data} /> : ""}
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-item: flex-start;
    padding: 0px 200px;
`;
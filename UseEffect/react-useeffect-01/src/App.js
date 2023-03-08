import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";
import axios from "axios";
function App() {
  const [apiData, setApiData] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [val, setVal] = useState(false);

  const fetchApi = useCallback(async () => {
    const data = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${inputValue}&app_id=34b396da&app_key=2cee4ae8447bf1a669bafdedbb75a55d`
    );
    setApiData(data.data.hits);
  }, [inputValue]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClickButton = () => {
    setVal(true);
    console.log(apiData);
  };
  return (
    <div className="App">
      <div className="input-container">
        <h1>Food Recipes App</h1>
        <div>
          <input type="text" onChange={handleOnChange} placeholder="Search" />
          <button onClick={handleClickButton} className="search-btn">
            Search
          </button>
        </div>
      </div>
      <div className="cards-container">
        {apiData &&
          val &&
          apiData.map((ele) => {
            return <Card ele={ele} />;
          })}
      </div>
    </div>
  );
}

export default App;

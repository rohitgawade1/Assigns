import './App.css';
import ColorPicker from './Components/ColorPicker';

function App() {
  function pickColor(color) {
    console.log(color);
  }
  return (
    <div className="App">
      <ColorPicker   name= {'Pink'} hexaName= {'#FF6663'}   onClick= {pickColor('red')}  />
      <ColorPicker  name= {'Gray'} hexaName= {'#333333'}  />
      <ColorPicker  name= 'Black' hexaName= '#000000'  />
      <ColorPicker  name= 'Green' hexaName= '#38BB14'  />
      <ColorPicker  name= 'Red' hexaName= '#C90B0B'  />
      <ColorPicker  name= 'Orange' hexaName= '#FF8000'  />
      <ColorPicker  name= 'Yellow' hexaName= '#FFF500'  />
      <ColorPicker  name= 'light Gray' hexaName= '#CCCCCC'  />
      <ColorPicker  name= 'Purple' hexaName= '#7E41A2'  />
      <ColorPicker  name= 'Brown' hexaName= '#C14911'  />
    </div>
  );
}

export default App;

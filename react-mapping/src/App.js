import './App.css';
import Card from './Components/Card';


function App() {
  let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  const isPrime = (num) => {
    let isPrime = true;

    if (num > 1) {

      // looping through 2 to number-1
      for (let i = 2; i < num; i++) {
          if (num % i === 0) {
              isPrime = false;
              break;
          }
      }
  
      if (isPrime) {
          return true;
      } 
      return false;
  }
  }
  return (
    <>
    <div style={{textAlign: 'center'}}>
        <h1>30 Days of React</h1>
        <h2>Number Generator</h2>
      </div>
    <div className="App">
      {
        arr.map((e) => {
         return <Card day={e} color={ isPrime(e) ? '#fd5e53' : e%2===0 ? '#21bf73' : e%2!==0 ? '#fddb3a' : ''} />
        })
      }
    </div>
    </>
  );
}

export default App;

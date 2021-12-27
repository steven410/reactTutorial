
let count = 0;
const minusOne = () => {
  count--;
  renderCounterApp();
}

const plusOne = () => {
  count--;
  renderCounterApp();
}

const reset = () => {
  count = 0;
  renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={plusOne} className="button">+1</button>
      <button onClick={minusOne} className="button">-1</button>
      <button onClick={reset} className="button">reset</button>
    </div>
  )

  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();

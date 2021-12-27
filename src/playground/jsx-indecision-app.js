const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two', 'Three']
};

const getOptions = (options) => {
  if (options) {
    return options.map((option, index) => <li key={index}>{option}</li>);
  }
}

const onFormSubmit = (e) => {
  e.preventDefault();
  var newOption = e.target.elements.option.value;
  if (newOption) {
    app.options.push(newOption);
    newOption = e.target.elements.option.value = '';
    renderOptionsApp();
  }
}

const reset = () => {
  app.options = [];
  renderOptionsApp();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const selectedOption = app.options[randomNum];
  console.log(selectedOption);
}

const renderOptionsApp = () => {
  const optionTemplate = (
    <div>
      <h1>{app.title}</h1> 
      {app.subtitle && <h2>{app.subtitle}</h2>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={!app.options.length} onClick={onMakeDecision}>What should I do?</button>
      <ol>

      </ol>
      {getOptions(app.options)}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
      <button onClick={reset}>Clear All Options</button>
    </div>
  );

  ReactDOM.render(optionTemplate, appRoot);
}


const appRoot = document.getElementById('app');

renderOptionsApp();

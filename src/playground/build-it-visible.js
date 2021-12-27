var app = {
  title: 'Visibility Toggle',
  visible: false,
};

const onToggle = () => {
  app.visible = !app.visible;
  renderVisibleApp();
}

const renderVisibleApp = () => {
  const optionTemplate = (
    <div>
      <h1>{app.title}</h1> 
      
      <button onClick={onToggle}>{
        app.visible ? 'Hide details' : 'Show details'
      }</button>

      {app.visible && (<div>Some content</div>)}
    </div>
  );

  ReactDOM.render(optionTemplate, appRoot);
}

const appRoot = document.getElementById('app');

renderVisibleApp();
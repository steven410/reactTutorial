class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing three'];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>Button</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return  (
      <div>
        <ul>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
        </ul>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <li>{this.props.optionText}</li>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <form action=""></form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

// This is a react component that is technically functional,
// but would be very hard to maintain because of it's size.

// It's easier to write tests for smaller components that pass
// data between them. Rewrite this component so that it could be
// rendered from somewhere else by using these lines.

// const checkboxes = [0, 1, 2];

// <Form>
// 	checkboxes.map(id =>
// 		<Checkbox key={id} id={id}/>
// 	)
// </Form>

// or (easier but less impresive)

// <Form checkboxes={checkboxes} />

// If you decide to do the second option you MUST STILL create and
// render a Checkbox Component inside the Form Component

const checkboxes = [1, 2, 3]

class Form extends React.Component {
  render() {

    const { children, checked } = this.props;

    return (
      <div className="form">
        <span>Checked boxes: {checked} </span>
        {children}
      </div>)
  }
}

const CheckBox = ({ item, checked, onChange }) => {
  return (
    <div className="checkbox-wrapper">
      <span>checkbox {item}</span>
      <input value={checked[item]} onChange={onChange} type="checkbox" />
    </div>
  )
}

class BigForm extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: []
    };
  }

  checkboxOnCheck(id) {
    const checked = this.state.checked.map((value, index) => {
      if (id === index) {
        return !value;
      }
      return value;
    });

    this.setState({ checked });
  }


  render() {
    const checked = this.state.checked
    return (
      <Form>
        {checkboxes.map(item =>
          <CheckBox item={item} checked={checked} onChange={this.checkboxOnCheck(item)} />
        )}
      </Form>
    )
  }
}

ReactDOM.render(
  <BigForm />,
  document.getElementById('container')
);
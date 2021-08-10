import React from 'react';
class Calculator extends React.Component {
  state = {
    a: 10,
    b: 5
  };
  render() {
    const add = this.state.a + this.state.b;
    return <div >
      {'Addd :' + add
}
      < br/> {'Sub:' + (this.state.a - this.state.b)
}
      < br/> {'Multiply :' + (this.state.a * this.state.b)
}
      < br/> {'Div :' + (this.state.a / this.state.b)
}
      < /div>
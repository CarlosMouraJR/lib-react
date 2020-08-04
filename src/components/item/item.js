import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props)

    console.log(props);

    this.state = {
      teste: "Alguma coisa"
    }
  }

  render() {
    return(
      <div>
        <button className="btn btn-secondary" >Item</button>
      </div>
    )
  }
}

export default Item;

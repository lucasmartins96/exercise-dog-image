import React, { Component } from 'react';

class Dog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePath: undefined,
      status: undefined,
    };
  }

  componentDidMount() {
    this.fetchDog();
  }

  async fetchDog() {
    this.setState(
      { status: 'loading' },
      async () => {
        const require = await fetch('https://dog.ceo/api/breeds/image/random');
        const response = await require.json();
        const { message, status } = response;
        this.setState({
          imagePath: message,
          status,
        });
      },
    );
  }

  render() {
    const { imagePath, status } = this.state;
    const loadingElement = <span>Loading...</span>;
    return (
      <div>
        <p>Doguinhos</p>
        <button type="button" onClick={ this.fetchDog }>Novo doguinho!</button>
        <div>
          { status === 'loading' ? loadingElement
            : <img src={ imagePath } alt="cachorro" /> }
        </div>
      </div>
    );
  }
}

export default Dog;

import React from 'react';
import './App.css';

class Dogs extends React.Component {
  constructor() {
    super();
    this.state = {
      imgUrl: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchPicture();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.imgUrl.includes('terrier')) {
      return false;
    }
    return true;
    // return !nextState.imgUrl.includes('terrier');
  }

  async fetchPicture() {
    // const response = await fetch('https://dog.ceo/api/breeds/image/random');
    // const result = await response.json();
    // this.setState({
    //   imgUrl: result.message,
    // });

    this.setState({
      loading: true,
    }, async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const result = await response.json();
      this.setState({
        loading: false,
        imgUrl: result.message,
      });
    });

    // this.setState({
    //   loading: true,
    // }, async () => {
    //   fetch('https://dog.ceo/api/breeds/image/random')
    //     .then((response) => response.json())
    //     .then((result) => this.setState({
    //       loading: false,
    //       imgUrl: result.message,
    //     }));
    // });
  }

  render() {
    const { loading, imgUrl } = this.state;
    return (
      <>
        <button type="button" onClick={ () => this.fetchPicture() }>Novo doguinho</button>
        <br />
        {loading ? 'loading...' : <img src={ imgUrl } alt="" />}
      </>
    );
  }
}

export default Dogs;

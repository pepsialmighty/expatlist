import React, { Component } from 'react';
import Thumbnail from '../Thumbnails/thumbnail';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  // componentDidMount() {
  //   fetch('/api/countries', {
  //     method: 'GET',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     credentials: 'same-origin',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       response.text();
  //     })
  //     .then((text) => {
  //       try {
  //         const data = JSON.parse(text);
  //         console.log(data);
  //       } catch (err) {
  //         console.log(err);
  //       }

  //       // this.setState({
  //       //   countries: json,
  //       // });
  //     });
  //   // .catch((err) => console.log(err));
  // }

  componentDidMount() {
    fetch('/api/countries', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          countries: json,
        });
      });
  }

  render() {
    return <Thumbnail countries={this.state.countries} />;
  }
}

export default Home;

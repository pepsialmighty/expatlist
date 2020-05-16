import React, { Component } from 'react';
import Header from './component/header';
import Footer from './component/footer';
import FilterBtn from './component/navbar/FilterBtn';
import Thumbnail from './component/Home/thumbnail';

class App extends Component {
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
        console.log(json);
        this.setState({
          countries: json,
        });
      });
  }

  render() {
    console.log('render');

    return (
      <>
        <Header />
        <FilterBtn />
        <div className='wrapper'>
          {this.state.countries
            ? this.state.countries.map((country, i) => (
                <div
                  key={i}
                  className='block_item'
                  style={{
                    background: `url(/images/1.jpg) no-repeat`,
                  }}
                >
                  <Thumbnail country={country} />
                </div>
              ))
            : null}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;

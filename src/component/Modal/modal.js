import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

class MyModal extends Component {
  handleOpen = () => {
    this.setState({
      showModal: this.props.show,
    });
  };

  handleClose = () => {
    this.props.closeModalChild(false);
  };

  render() {
    const customStyles = {
      content: {
        top: '70px',
        left: '20px',
        bottom: '16px',
        right: '100%',
        marginRight: '-450px',
        marginBottom: '68px',
        padding: '0px',
      },
    };

    return (
      <>
        <Modal
          isOpen={this.props.show} //boolean
          ariaHideApp={false}
          onRequestClose={this.handleClose} //function
          style={customStyles}
        >
          <div className='twelve columns modal_block'>
            <div className='six columns modal_content'>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    🤘
                  </span>
                  Get Stated
                </Link>
              </div>
            </div>
            <div className='six columns modal_content'>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    👋
                  </span>
                  Log in
                </Link>
              </div>
            </div>
          </div>

          <div className=' twelve columns modal_block'>
            <div className='six columns modal_content'>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    👋
                  </span>
                  Home
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    ⚙️
                  </span>
                  Settings
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    🌐
                  </span>
                  Change °C/°F/$
                </Link>
              </div>
            </div>
            <div className='six columns modal_content'>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    🌐
                  </span>
                  Your profile
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    ❤️
                  </span>
                  My wish list
                </Link>
              </div>
            </div>
          </div>

          <div className='twelve columns  modal_block'>
            <div className='six columns modal_content'>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    🏡
                  </span>
                  Cities
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    🌍
                  </span>
                  Community
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    🏜
                  </span>
                  Explore
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    🗯
                  </span>
                  Forum
                </Link>
              </div>
            </div>
            <div className='six columns modal_content'>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    🇳🇱
                  </span>
                  Countries
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    👋
                  </span>
                  Dating
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    💬
                  </span>
                  Chat
                </Link>
              </div>
            </div>
          </div>

          <div className='twelve columns  modal_block'>
            <div className='six columns modal_content'>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    📸
                  </span>
                  Vote on photos
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    🔮
                  </span>
                  Show a random place
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    🔌
                  </span>
                  Bali sea cable status
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    📊
                  </span>
                  Travel trends
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    ⛄️
                  </span>
                  Escape the winter
                </Link>
              </div>
            </div>
            <div className='six columns modal_content'>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    💡
                  </span>
                  Request features
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    💸
                  </span>
                  FIRE calculator
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    🌤
                  </span>
                  Climate finder
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    🏡
                  </span>
                  Real estate overseas
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    🦠
                  </span>
                  COVID-19 data
                </Link>
              </div>
            </div>
          </div>

          <div className='twelve columns  modal_block'>
            <div className='six columns modal_content'>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    👩‍💻
                  </span>
                  Remote jobs
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  {' '}
                  <span role='img' aria-label=''>
                    🗺
                  </span>
                  Neighborhoods
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    🏬
                  </span>
                  Coworking spaces
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    🚑
                  </span>
                  Nomad insurance
                </Link>
              </div>
            </div>
            <div className='six columns modal_content'>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    ✈️
                  </span>
                  Airlines
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    🏝
                  </span>
                  Coworkations
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    🔖
                  </span>
                  Incorporate
                </Link>
              </div>
            </div>
          </div>

          <div className='twelve columns  modal_block'>
            <div className='six columns modal_content'>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    📣
                  </span>
                  Advertises
                </Link>
              </div>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    💁
                  </span>
                  Help
                </Link>
              </div>
            </div>
            <div className='six columns modal_content'>
              <div className=' modal_article'>
                <Link
                  to='/modal'
                  className='modal_link'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span role='img' aria-label=''>
                    🙌
                  </span>
                  Open Startup
                </Link>
              </div>
            </div>
          </div>

          <button
            onClick={() => this.props.closeModalChild(false)}
            className='modal_btn'
          >
            Close
          </button>
        </Modal>
      </>
    );
  }
}

export default MyModal;

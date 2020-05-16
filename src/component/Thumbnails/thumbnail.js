import React from 'react';
import { Link } from 'react-router-dom';

const Thumbnail = ({ countries }) => {
  return (
    <div className='wrapper'>
      {countries
        ? countries.map((country, i) => (
            <div
              key={i}
              className='block_item'
              style={{
                background: `url(/images/1.jpg) no-repeat`,
              }}
            >
              <Link to={`/country/${country.id}`}>
                <div className='top'>
                  <div className='veil'></div>
                  <div className='block_content'>
                    <p>{country.id}</p>
                    <h3>{country.countryName}</h3>
                    <i className='fas fa-wifi '></i>
                    <i className='fas fa-cloud-sun'></i>
                    <i className='fas fa-dollar-sign'></i>
                  </div>
                  <div className='block_hover'>
                    <i className='far fa-heart'></i>
                    <i className='fas fa-times'></i>
                    <div className='hover_content'>
                      <div className='progress-flex'>
                        <div className=' progress-content'>
                          <p>Nomad score</p>
                        </div>
                        <div className=' nomad_score progress'>
                          <div className='progress-value'></div>
                        </div>
                      </div>

                      <div className='progress-flex'>
                        <div className=' progress-content'>
                          <p>Nomad score</p>
                        </div>
                        <div className=' nomad_score progress'>
                          <div className='progress-value'></div>
                        </div>
                      </div>
                      <div className='progress-flex'>
                        <div className=' progress-content'>
                          <p>Nomad score</p>
                        </div>
                        <div className=' nomad_score progress'>
                          <div className='progress-value'></div>
                        </div>
                      </div>
                      <div className='progress-flex'>
                        <div className=' progress-content'>
                          <p>Nomad score</p>
                        </div>
                        <div className=' nomad_score progress'>
                          <div className='progress-value'></div>
                        </div>
                      </div>
                      <div className='progress-flex'>
                        <div className=' progress-content'>
                          <p>Nomad score</p>
                        </div>
                        <div className=' nomad_score progress'>
                          <div className='progress-value'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        : null}
    </div>
  );
};

export default Thumbnail;

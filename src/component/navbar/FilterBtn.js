import React from 'react';

const FilterBtn = () => {
  return (
    <div className='row-filter'>
      <div className='col-xs-5 col-sm-6 col-md-4 col-lg-5'>
        <button type='button' className='btn btn-default thumb-btn'>
          Nomad score
        </button>
        <input
          type='text'
          placeholder='Search filter'
          className='filter-input'
        />
      </div>
      <div className='col-xs-7 col-sm-6 col-md-8 col-lg-7'>
        <button type='button' className='btn btn-default thumb-btn'>
          Nomad score
        </button>
        <button type='button' className='btn btn-default thumb-btn'>
          Nomad score
        </button>
        <select className='btn btn-default thumb-btn thumb-select'>
          <option value='Nomad Score'>Nomad Score</option>
          <option value='Nomad Score'>Nomad Score</option>
          <option value='Nomad Score'>Nomad Score</option>
          <option value='Nomad Score'>Nomad Score</option>
          <option value='Nomad Score'>Nomad Score</option>
          <option value='Nomad Score'>Nomad Score</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBtn;

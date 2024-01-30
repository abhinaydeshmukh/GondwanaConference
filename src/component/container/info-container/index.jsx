import React from 'react';
import './index.css';

function InfoContainer() {
  return (
    <div className='info-container border p-2 my-2 d-flex justify-content-center'>
      <div className='info-sub-container p-5 my-5 w-md-75 border'>
        <p className='p-2 fs-3'>January 26, 2024</p>
        <h1 className='p-2 display-4 '>2024 Public Policy Conference</h1>
        <h1 className='p-2 display-4'>Maharashtra Gadchiroli</h1>
        <p className='p-2 fs-5'>
          my name is palash deshmukh my name is palash deshmukh my name is palash deshmukh
        </p>
        <p className='p-2 fs-5'>
          my name is palash deshmukh my name is palash deshmukh my name is palash deshmukh
        </p>
        <div className='row'>
          <div className='col-12 col-md-6 mb-3 mb-md-0'>
            <button className='btn btn-sm btn-color col-12 btn-primary p-3 fs-6 rounded-0'>
              Buy Tickets Now!
            </button>
          </div>

          <div className='col-12 col-md-6'>
            <button className='btn btn-sm btn-color col-12 btn-primary p-3 fs-6 rounded-0'>
              Buy Tickets Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoContainer;

import React from 'react';
import './index.css';

function HeaderTitle() {
  return (
    <div className='header-title-container d-flex justify-content-center p-2'>
      <div className='header-sub-title-container w-100 w-md-75 p-2 text-secondary'>
        <div className='w-100 p-2'>
          <h1 className=' display-4' style={{ color: 'rgba(68, 122, 193,1)' }}>Gondwana University <span className=" text-uppercase display-4">Conference</span></h1>
          <p  className="mb-0">August 25, 2023 - Gadchiroli Maharashtra</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderTitle;

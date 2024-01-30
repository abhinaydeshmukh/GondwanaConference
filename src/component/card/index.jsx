import React from 'react';
import PrashantVCSir from '../../assets/images/prashantVC.png';

const speakerData = [
  { id: 1, name: 'Dr. Prashant Bokare', position: 'Honble Vice Chancellor', university: 'Gondwana University', location: 'Gadchiroli' },
  { id: 1, name: 'Dr. Shriram Kawale', position: 'Honble Pro-Vice Chancellor', university: 'Gondwana University', location: 'Gadchiroli' },
  { id: 1, name: 'Dr. Anil Hirekhan', position: 'Hon’ble Registrar', university: 'Gondwana University', location: 'Gadchiroli' },
  // Add more speaker data as needed
];

function SpeakerCard() {
  return (
    <div className=' w-100 m-0 gap-4 p-3 d-flex flex-wrap justify-content-center'>
      {speakerData.map((speaker) => (
        <div key={speaker.id} className='card-container rounded-3 p-2 col-lg-3 col-md-3 col-sm-12 shadow-lg'>
          <div className='card-image-container'>
            {/* <img src={PrashantVCSir} alt="PrashantVC" className='w-100 rounded-top' /> */}
          </div>
          <div className='text-center p-2 m-0  '>
            <p className='m-0 display-6'>{speaker.name}</p>
            <p className='fs-6 m-0 '>{speaker.position}<br />{speaker.university}<br />{speaker.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SpeakerCard;

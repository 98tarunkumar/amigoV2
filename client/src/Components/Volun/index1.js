import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css';
import Img from '../../Images/svg-8.svg';
import { FaBackspace } from 'react-icons/fa';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function Volunteer({ setIsVolun }) {
  const [value, onChange] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [volunData, setVolunData] = useState('');
  const changeHandler = (value) => {
    onChange(onChange);
    setIsOpen(!isOpen);
  };
  // further notification example
  // const createNotification = (type) => {
  //   return () => {
  //     switch (type) {
  //       case 'info':
  //         NotificationManager.info('Info message');
  //         break;
  //       case 'success':
  //         NotificationManager.success('Success message', 'Form Submitted');
  //         break;
  //       case 'warning':
  //         NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
  //         break;
  //       case 'error':
  //         NotificationManager.error('Error message', 'Click me!', 5000, () => {
  //           alert('callback');
  //         });
  //         break;
  //     }
  //   };
  // };
  const onSubmitHandler = () => {
    if (!volunData) {
      NotificationManager.error('Please fill the form!', 'Form Empty', 2500);
    } else {
      NotificationManager.success('Thanks for supporting us!', 'Form Submitted');
    }
  };
  return (
    <div className='volunBlock'>
      <FaBackspace className='goVolun' onClick={() => setIsVolun(false)} />
      <div className='volunBody'>
        <img className='volunLeft' src={Img} alt='Volunteer'></img>
        <div className='volunRight'>
          <div className='volunFormBody'>
            <div className='volunFormHead'>Be a Volunteer!</div>
            <div className='formTable'>
              <div className='formRow'>
                <div className='formCells volunFormLabel'>Name:</div>
                <div className='formCells'>
                  <input type='text' className='volunInput' />
                </div>
              </div>
              <div className='formRow'>
                <div className='formCells volunFormLabel'>Email:</div>
                <div className='formCells'>
                  <input type='text' className='volunInput' />
                </div>
              </div>
              <div className='formRow'>
                <div className='formCells volunFormLabel'>Phone No:</div>
                <div className='formCells'>
                  <input type='text' className='volunInput' />
                </div>
              </div>
              <div className='formRow'>
                <div className='formCells volunFormLabel'>Address:</div>
                <div className='formCells'>
                  <input type='text' className='volunInput' />
                </div>
              </div>
              <div className='formRow volunFormLabel'>
                Available Date
                <div className='formCells dateStyle'>From:</div>
                <div className='formCells dateStyle'>To:</div>
              </div>
            </div>
            {/* <div className='volunFormHead'>Be a Volunteer!</div>
            <div className='volunFormRow'>
              Name: <input type='text' className='volunInput' />
            </div>
            <div className='volunFormRow'>
              Email:
              <input type='text' className='volunInput' />
            </div>
            <div className='volunFormRow'>
              Phone No:
              <input type='text' className='volunInput' />
            </div>
            <div className='volunFormRow'>
              Address:
              <input type='text' className='volunInput' />
            </div>
            <div className='volunFormRow'>
              Availability Date:
              {isOpen ? (
                <Calendar className='volunCalendar' onChange={onChange} value={value} />
              ) : (
                <div onClick={changeHandler}>selected Date: </div>
              )}
              {console.log(value)}
            </div> */}
          </div>
          <div className='volunFromBtn'>
            <div className='volunSubmit' onClick={onSubmitHandler}>
              Submit
            </div>
            <NotificationContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;

import React, { useState } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Send.css';
import Img from '../../Images/send2.svg';
import { FaBackspace } from 'react-icons/fa';
import { GoChevronUp, GoChevronDown } from 'react-icons/go';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function Send({ setIsSend }) {
  const [value, onChange] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [volunData, setVolunData] = useState(true);
  const [availabilityOrder, setAvailabilityOrder] = useState(0);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phoneNo: '',
    city: '',
    clothes: false,
    medicine: false,
    volunteer: false,
    accommodation: false,
    availabilityOrder: 0
  });
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
    console.log(formState);
    if (
      formState.medicine === false &&
      formState.clothes === false &&
      formState.volunteer === false &&
      formState.accommodation === false
    ) {
      NotificationManager.error('Please fill the form!', 'Form Empty', 2500);
    } else {
      axios.post('https://amigoservers.herokuapp.com/', formState).then(() => {
        console.log('success');
        NotificationManager.success('Thanks for supporting us!', 'Form Submitted');
      });
    }
  };
  return (
    <div className='volunBlock'>
      <FaBackspace className='goVolun' onClick={() => setIsSend(false)} />
      <div className='volunBody'>
        <div className='volunRight'>
          <div className='volunFormBody'>
            <div className='volunFormHead sendHead'>Share Resources!</div>
            <div className='formTable'>
              <div className='formRow'>
                <div className='formCells volunFormLabel'>Name:</div>
                <div className='formCells sendRight '>
                  <input
                    type='text'
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className='volunInput sendInput'
                  />
                </div>
              </div>
              <div className='formRow'>
                <div className='formCells volunFormLabel'>Email:</div>
                <div className='formCells sendRight'>
                  <input
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    type='text'
                    className='volunInput sendInput'
                  />
                </div>
              </div>
              <div className='formRow'>
                <div className='formCells volunFormLabel'>Phone No:</div>
                <div className='formCells sendRight'>
                  <input
                    value={formState.phoneNo}
                    onChange={(e) => setFormState({ ...formState, phoneNo: e.target.value })}
                    type='text'
                    className='volunInput sendInput'
                  />
                </div>
              </div>
              <div className='formRow'>
                <div className='formCells volunFormLabel'>City:</div>
                <div className='formCells sendRight'>
                  <input
                    value={formState.city}
                    onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                    type='text'
                    className='volunInput sendInput'
                  />
                </div>
              </div>
              <div className='formRow '>
                <div className='formCells '>
                  <div className='sendCheckBox'>
                    <input
                      type='checkbox'
                      value={formState.clothes}
                      onChange={() => setFormState({ ...formState, clothes: !formState.clothes })}
                    />
                    <div className='formCells volunFormLabel sendFormLabel'>Clothes</div>
                  </div>
                </div>
                <div className='formCells '>
                  <div className='sendCheckBox'>
                    <input
                      type='checkbox'
                      value={formState.accommodation}
                      onChange={() =>
                        setFormState({ ...formState, accommodation: !formState.accommodation })
                      }
                    />
                    <div className='formCells volunFormLabel sendFormLabel'>Accomodation</div>
                  </div>
                </div>
              </div>
              <div className='formRow '>
                <div className='formCells '>
                  <div className='sendCheckBox'>
                    <input
                      type='checkbox'
                      value={formState.medicine}
                      onChange={() => setFormState({ ...formState, medicine: !formState.medicine })}
                    />
                    <div className='formCells volunFormLabel sendFormLabel'>MedicalHelp</div>
                  </div>
                </div>
                <div className='formCells '>
                  <div className='sendCheckBox'>
                    <input
                      type='checkbox'
                      value={formState.volunteer}
                      onChange={() =>
                        setFormState({ ...formState, volunteer: !formState.volunteer })
                      }
                    />
                    <div className='formCells volunFormLabel sendFormLabel'>Volunteer</div>
                  </div>
                </div>
              </div>
              <div className='formRow '>
                <div className='formCells '>
                  <div className='formCells volunFormLabel sendFormLabel AvailText'>
                    Availability Order:
                  </div>
                </div>
                <div className='formCells '>
                  <input
                    className=' avail'
                    type='number'
                    onChange={(e) =>
                      setFormState({ ...formState, availabilityOrder: e.target.value })
                    }
                    value={formState.availabilityOrder}
                  />
                </div>
              </div>

              {/* <div className='formRow volunFormLabel'>
                Available Date
                <div className='formCells dateStyle'>From:</div>
                <div className='formCells dateStyle'>To:</div>
              </div> */}
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
        <img className='volunLeft' src={Img} alt='Volunteer'></img>
      </div>
    </div>
  );
}

export default Send;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import './style.css';
import { Link as LinkR } from 'react-router-dom';
import Video from '../../Videos/covid1.mp4';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { FaSortAmountDown, FaSortAmountUpAlt, FaBackspace } from 'react-icons/fa';
import apiKey from '../../emailKey';
import emailjs from 'emailjs-com';
import RobotAnimated from './animatedRobot';
import moment from 'moment';

function Receive({ setIsReceive }) {
  const [dataRes, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [asc, setAsc] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:5050/').then((response) => {
      setData(response.data);
      //console.log(response.data);
    });

    // setData(dummyData);
  }, []);

  useEffect(() => {}, [dataRes]);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    onFilter();
  };

  const onFilter = () => {
    const val = search.toLowerCase();
    const newData = dataRes.filter(
      (data) =>
        data.name.toLowerCase().includes(val) ||
        data.email.toLowerCase().includes(val) ||
        data.city.toLowerCase().includes(val)
    );
    setData(newData);
  };
  const onSortHandler = () => {
    setAsc(!asc);
    console.log(asc);
    var sortData = null;
    {
      asc
        ? (sortData = dataRes.sort((a, b) => {
            return a.availabilityOrder - b.availabilityOrder;
          }))
        : (sortData = dataRes.sort((a, b) => {
            return b.availabilityOrder - a.availabilityOrder;
          }));
    }
    console.log(sortData.map((s) => s.availabilityOrder));
    setData(sortData);
  };
  const emailSend = (e) => {
    e.preventDefault();
    console.log('emailSend');
    emailjs.sendForm(`service_h6w6m6v`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID).then(
      (result) => {
        alert('Message Sent, We will get back to you shortly', result.text);
      },
      (error) => {
        alert('An error occurred, Please try again', error.text);
      }
    );
    e.target.reset();
  };
  return (
    <>
      {showEmail ? (
        <div className='emailBody'>email template</div>
      ) : (
        <div className='ReceiveBlock' muted loop autoPlay src={Video} type='video/mp4'>
          <div className='receiveHead'>
            <div className='searchComponent'>
              <input
                type='text'
                className='searchBox'
                value={search}
                placeholder='Search by Name,City or Email'
                onChange={(e) => onChangeHandler(e)}
              />
              <button className='searchBtn' onClick={onFilter}>
                Search
              </button>
            </div>
            <div className='filterComponent'>
              <div className='sort' onClick={onSortHandler}>
                Sort by Availability: {!asc ? <FaSortAmountUpAlt /> : <FaSortAmountDown />}
              </div>
            </div>
            <div className='actionBtn'>
              <div className='addNewReq'>
                {/* <LinkR className='linkStyle' to='/send'>
                  <IoIosAddCircleOutline className='addNewReqIcon' />
                </LinkR> */}
              </div>
              <FaBackspace className='goService' onClick={() => setIsReceive(false)} />
            </div>
          </div>
          <div className='receiveBody'>
            {!dataRes.length ? (
              <>
                <RobotAnimated />
                <h3 style={{ color: 'white' }}>Loading Data from server..</h3>
              </>
            ) : (
              <>
                {dataRes.map((data) => (
                  <>
                    <div className='receiveBodyBlock'>
                      <div className='receiveRow'>
                        <p>Name: {_.capitalize(data.name)}</p>
                        <p>City: {_.capitalize(data.city)}</p>
                      </div>
                      <div className='receiveRow'>
                        <p>Email: {data.email}</p>
                        <p>Date: {moment(data?.createdAt).format('MMM-DD-YYYY')}</p>
                      </div>
                      <div className='receiveRow'>
                        <div className='receiveRowOption'>
                          {data.clothes && <div className='receiveAvail'>Clothes</div>}

                          {data.accommodation && <div className='receiveAvail'>Accommodation</div>}

                          {data.medicine && <div className='receiveAvail'>MedicalHelp</div>}
                          {data.volunteer && <div className='receiveAvail'>Volunteer</div>}
                        </div>
                        <div className='selectWrapper'>
                          <div className='availabilityOrder'>
                            {data.availabilityOrder == 3 ? (
                              <div
                                style={{
                                  background: 'green',
                                  borderRadius: '50%',
                                  height: '1.5rem',
                                  width: '1.5rem'
                                }}
                              />
                            ) : data.availabilityOrder == 2 ? (
                              <div
                                style={{
                                  background: 'orange',
                                  borderRadius: '50%',
                                  height: '1.5rem',
                                  width: '1.5rem'
                                }}
                              />
                            ) : (
                              <div
                                style={{
                                  background: 'red',
                                  borderRadius: '50%',
                                  height: '1.5rem',
                                  width: '1.5rem'
                                }}
                              />
                            )}
                          </div>
                          <div className='searchBtn selectBtn' onClick={() => setShowEmail(true)}>
                            Select
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Receive;

// create a form to send the user about the requested resource
// keep in mind that the name here will be same as in template of email.js , such as in this case 'tarun' is working
{
  /* <form onSubmit={(e) => emailSend(e)}>
                      <input name='tarun' type='text' placeholder='enter' />
                      <input type='submit' value='Send message' />
                    </form> */
}

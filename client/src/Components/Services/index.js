import React, { useState } from 'react';
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper
} from './ServicesElements';
import ReceiveBlock from '../Receive/index';
import Volunteer from '../Volun/index1';
import Send from '../Send/index1';
import Icon1 from '../../Images/send.svg';
import Icon2 from '../../Images/voln.svg';
import Icon3 from '../../Images/receive.svg';
const Services = () => {
  const [isReceive, setIsReceive] = useState(false);
  const [isVolun, setIsVolun] = useState(false);
  const [isSend, setIsSend] = useState(false);
  return (
    <>
      <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        {isReceive ? (
          <ReceiveBlock setIsReceive={setIsReceive} />
        ) : isVolun ? (
          <Volunteer setIsVolun={setIsVolun} />
        ) : isSend ? (
          <Send setIsSend={setIsSend} />
        ) : (
          <ServicesWrapper>
            <ServicesCard onClick={() => setIsSend(!isSend)}>
              {/* <a style={{ textAlign: 'center', color: 'black' }} href='/send'> */}
              <ServicesIcon src={Icon1} />
              <ServicesH2>Share Resources</ServicesH2>
              <ServicesP>Help those in need with your non-usable resources</ServicesP>
              {/* </a> */}
            </ServicesCard>

            <ServicesCard onClick={() => setIsVolun(!isVolun)}>
              {/* <a style={{ textAlign: 'center', color: 'black' }} href='/volunteer'> */}
              <ServicesIcon src={Icon2} />
              <ServicesH2>Be a Volunteer</ServicesH2>
              <ServicesP>Be a guide for someone, so that they can be for others</ServicesP>
              {/* </a> */}
            </ServicesCard>
            <ServicesCard onClick={() => setIsReceive(!isReceive)}>
              {/* <a style={{ textAlign: 'center', color: 'black' }} href='/receive'> */}
              <ServicesIcon src={Icon3} />
              <ServicesH2>Receive Resources</ServicesH2>
              <ServicesP>Make requests for resources those are urgent</ServicesP>
              {/* </a> */}
            </ServicesCard>
          </ServicesWrapper>
        )}
      </ServicesContainer>
    </>
  );
};

export default Services;

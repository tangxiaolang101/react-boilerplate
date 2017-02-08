/**
*
* YubaHeader
*
*/

import React from 'react';
import img from './header.png';
import styled from 'styled-components';
const Img=styled.img`
  width:2.55rem;
`;
const Wrapper=styled.div`
    background-color: #f70;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

class YubaHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
      <Img src={img}  />
      </Wrapper>
    );
  }
}

YubaHeader.propTypes = {

};

export default YubaHeader;

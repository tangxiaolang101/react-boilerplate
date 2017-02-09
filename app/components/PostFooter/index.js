/**
*
* PostFooter
*
*/

import React from 'react';
import MessageIcon from '../MessageIcon'
import IssueIcon from '../IssueIcon'
import styled from 'styled-components';

const Wrapper=styled.div`
  display:flex;
  align-items:stretch;
  height:.4rem;
  margin:.24rem .3rem;

`;
const Left=styled.div`
  display:flex;
  
`;
const Right=styled.div`
  display:flex;
  
`;


class PostFooter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper >
      <Left><span>来自</span></Left>
      <Right/>
      </Wrapper>
    );
  }
}

PostFooter.propTypes = {

};

export default PostFooter;

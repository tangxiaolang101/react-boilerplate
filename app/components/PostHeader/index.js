/**
*
* PostHeader
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 1rem;
  justify-content: flex-start;
  align-items: center;
  margin:.24rem .3rem;
`;

const Avatar = styled.img`
  display: flex;
  height: .78rem;
  width:.78rem;
  border-radius: .78rem;
  border: .02rem solid #ccc;
  justify-content: flex-start;
  align-items: center;
`;

const RightBox = styled.div`
color:#999;
display:flex;
flex-direction:column;
margin-left: .2rem;
`;

const NameString = styled.div`
font-size:.28rem;
`;

const TimeString = styled.div`
font-size:.2rem;
`;


class PostHeader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const avatar='https://apic.douyucdn.cn/upload/avanew/face/201609/28/01/f753a7aaa6e6b5f6df3f66e3b6a74cd3_big.jpg?rltime=1486626791';
    const name='麻烦搜的咖啡机';
    const time='2天前';
    return (
      <Wrapper>
        <Avatar src={avatar}/>
        <RightBox>
          <NameString>
            {name}
          </NameString>
          <TimeString>
            {time}
          </TimeString>
        </RightBox>
      </Wrapper>
    );
  }
}

PostHeader.propTypes = {

};

export default PostHeader;

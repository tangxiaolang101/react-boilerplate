/*
 *
 * YubaHomepage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectYubaHomepage from './selectors';
import GroupList from 'components/GroupList';
import PostHeader from 'components/PostHeader';
import PostFooter from 'components/PostFooter';

export class YubaHomepage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      <GroupList/>
      <PostHeader/>
      <PostFooter/>
      </div>
    );
  }
}

YubaHomepage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  YubaHomepage: makeSelectYubaHomepage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(YubaHomepage);

import React from 'react';
import CategoryScreen from './CategoryScreen';
import {connect} from 'react-redux';
import {listCategoryActionhandler} from './../../redux/actions/vendor/AppAction';

const Index = props => {
  return <CategoryScreen {...props} />;
};

const mapDispatchToProps = dispatch => {
  return {
    listCategory: data => dispatch(listCategoryActionhandler(data)),
  };
};

export default connect(null, mapDispatchToProps)(Index);

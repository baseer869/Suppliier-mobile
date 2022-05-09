import React from 'react'
import ProfileScreen from './ProfileScreen';
import { connect } from 'react-redux';

const Index = (props) => {
  return (
    <ProfileScreen  {...props} />
  )
}


const mapDispatchToProps = () =>{
  return {
    
  }
}

export default connect( undefined, mapDispatchToProps )(Index)

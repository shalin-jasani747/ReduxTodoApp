import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { connect } from 'react-redux';
import CustomHeader from './CustomHeader';

const Redux = ({navigation}) => {
  return (
    <Container>
      <CustomHeader headerTitle={'Redux Todos'} onPress={() => navigation.goBack()} />

    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(
  mapStateToProps,
  null
)(Redux);

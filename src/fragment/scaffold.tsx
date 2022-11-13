import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';
import PropTypes from 'prop-types';

const Scaffold = props => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.colors.primary}]}>
      {theme.dark ? (
        <StatusBar hidden={!props.showStatus} barStyle={'dark-content'} />
      ) : (
        <StatusBar hidden={!props.showStatus} barStyle={'light-content'} />
      )}
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Scaffold.propTypes = {
  showStatus: PropTypes.bool,
};

export default Scaffold;

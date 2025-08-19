'use strict';

import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class TabNavigatorItem extends React.Component {
  static defaultProps = {
  };

  render() {
    let child = React.Children.only(this.props.children);
    return React.cloneElement(child, {
      style: [child.props.style, this.props.style],
    });
  }
}

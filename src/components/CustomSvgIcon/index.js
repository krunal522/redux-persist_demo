import React from 'react';
import { SvgXml } from 'react-native-svg';

const CustomSvgIcon = ({ xml, width = 32, height = 32, style = {} }) => (
  <SvgXml xml={xml} width={width} height={height} style={style} />
);

export default CustomSvgIcon;
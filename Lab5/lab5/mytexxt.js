import React from 'react';
import { Text } from 'react-native';

const MyText = (props) => {
return (
<Text>{props.children}</Text>
);
};

export default MyText;
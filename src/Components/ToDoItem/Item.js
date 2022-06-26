import React from 'react';
import {View, Text} from 'react-native';
import styles from './Item.style';

const Item = (props) =>{
    return(
        <View style={styles.container}>
            <Text style={props.textStyle}>{props.text}</Text>
        </View>
    );
}

export default Item;
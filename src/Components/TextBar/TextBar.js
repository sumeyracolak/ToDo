import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './TextBar.style';

const TextBar = (props) =>{
    
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={props.onEnteredText}value={props.value} placeholder='Yapılacak...' placeholderTextColor="#fff"/>
        </View>
    )
}

export default TextBar;
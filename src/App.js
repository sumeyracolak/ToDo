import React, {useState} from "react";
import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import TextBar from './Components/TextBar';
import ToDoItem from './Components/ToDoItem';

const App = () => {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if(task != null){
      setTaskItems([...taskItems, task])
      setTask(null);
    }
  }
  
  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  const [selected, setSelected] = useState([]);
  const onSelect = (index) => {
    selected.includes(index) ? setSelected(selected.filter(s => s !== index)) : setSelected([...selected, index]);
  }
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Yapılacaklar</Text>
      </View>
      <View style={styles.body}>
        {
          taskItems.map((item, index) => {
            return (
              <TouchableOpacity 
                key={index} 
                onPress={() => onSelect(index)} 
                onLongPress={() => deleteTask(index)}
              >
                <ToDoItem text={item} textStyle={selected.includes(index) ? styles.itemCompleated : styles.itemDefault} /> 
              </TouchableOpacity>
            )
          })
        }
        
      </View>
      <View style={styles.footer}>
        <TextBar value={task} onEnteredText={text => setTask(text)} />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{flex: 1, backgroundColor:'#eee', padding: 10, justifyContent:"space-between"},
  header:{flexDirection:'row', justifyContent:"space-between"},
  title:{fontSize:30, fontWeight:"bold", color:"orange"},
  count:{fontSize: 30, color:"orange"},
  body:{backgroundColor:"#ddd", flex: 1, borderRadius: 10, marginVertical: 10, padding: 5},
  footer:{backgroundColor:"grey", borderRadius: 10, paddingHorizontal: 10, paddingVertical: 20 },
  button:{marginTop: 20, backgroundColor:"#eee", borderRadius: 10},
  buttonText:{lineHeight: 50, textAlign: "center", fontSize: 20},
  itemDefault:{fontSize: 20, color: "#000"},
  itemCompleated:{fontSize: 20, color: "#ddd",textDecorationLine:"line-through"}
});

export default App;
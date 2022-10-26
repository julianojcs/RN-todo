import { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { api } from '../../services/api';
import { styles } from '../../themes';

export const Update = () => {
  const navigation = useNavigation();
  const [task, setTask] = useState(null);
  const route = useRoute();

  const handleUpdate = () => {
    if (task?.title && task?.details) {
      api.patch(`/task/${task.id}`, task).then(() => {
        navigation.navigate('Task List', {refresh: Date.now()});
      }).catch((err) => {
        console.log(err);
        throw err.message;
      });
    }
  };

  useEffect(() => {
    setTask(route.params.task);
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Update the task</Text>
      </View>
      <View style={styles.addContainer}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          placeholder="Title"
          value={task?.title}
          // onChangeText={(text) => setTitle(text)}
          onChangeText={(text) => setTask(prev => ({...prev, title: text}))}
          style={styles.input}
        />
        <Text style={styles.label}>Details:</Text>
        <TextInput
          placeholder="Details"
          value={task?.details}
          onChangeText={(text) => setTask(prev => ({...prev, details: text}))}
          multiline={true}
          numberOfLines={4}
          style={[styles.input, {verticalAlign: 'top'}]}
        />
        <TouchableOpacity onPress={handleUpdate} >
          <Text style={styles.button}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

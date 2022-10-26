import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { styles } from '../../themes';

export const Registration = ({ navigation: { goBack } }) => {
  const navigation = useNavigation();
  const [task, setTask] = useState(null);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleRegistration = () => {
    if (task?.title && task?.details) {
      const data = {
        title: task.title,
        details: task.details,
        createdAt: new Date(),
        completedAt: null,
      }
      api.post('/task', data).then((_) => {
        navigation.navigate('Task List', {refresh: Date.now()});
      }).catch((err) => {
        console.log(err);
        throw err.message;
      });
    }
    console.log();
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Add new task</Text>
      </View>
      <View style={styles.addContainer}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
          style={styles.input}
        />
        <Text style={styles.label}>Details:</Text>
        <TextInput
          placeholder="Details"
          value={details}
          onChangeText={(text) => setDetails(text)}
          multiline={true}
          numberOfLines={4}
          style={[styles.input, {verticalAlign: 'top'}]}
        />
        <TouchableOpacity onPress={handleRegistration} >
          <Text style={styles.button}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Toast from "react-native-toast-message";
import { api } from '../../services/api';
import { colors } from '../../themes';
import Item from './Item';

export const Home = () => {
  const [tasks, setTasks] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const compare = (a, b) => (a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0);

  const handleConpleteTask = async (task) => {
    try {
      const found = task ? tasks.find((e) => e.id === task.id): false;
      if (found) {
        let completedAt = null
        const data = tasks.map((e) => {
          if (e.id === task.id) {
            if (e.completedAt) {
              e.completedAt = null;
            } else {
              e.completedAt = new Date();
              completedAt = e.completedAt;
            }
          }
          return e
        });
        setTasks(data);
        api.patch(
          `/task/${task.id}`,
          { completedAt: completedAt },
        ).catch((err) => {
          console.log(err);
          throw err.message;
        });
      } else {
        console.log("Task not found");
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: `${error.message}.`,
        position: "top",
      });
    }
  };

  const handleDelete = async (task) => {
    try {
      const found = task ? tasks.find((e) => e.id === task.id): false;
      if (found) {
        api.delete(`/task/${task.id}`).catch((err) => {
          console.log(err);
        }).catch((err) => {
          console.log(err);
          throw err.message;
        });
        setTasks(prev => prev.filter((e) => e.id !== task.id));
        Toast.show({
          type: "success",
          text1: "Successfully deleted",
          text2: `Task "${task.title} deleted.`,
          position: "top",
        });
      } else {
        console.log("Task not found");
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: `${error.message}.`,
        position: "top",
      });
    }
  };

  const handleNavigateToRegistration = () => {
    navigation.navigate('New Task');
  };

  const handleEdit = (task) => {
    navigation.navigate('Edit Task', { task: task });
  };

  const handleShow = (task) => {
    navigation.navigate('Show Task', { task: task });
  };

  const renderItem = ({ item }) => {
    return (
      <Item
          item={item}
          onChange={() => handleConpleteTask(item)}
          onDelete={() => handleDelete(item)}
          onEdit={() => handleEdit(item)}
          onShow={() => handleShow(item)}
        />
    );
  };

  useEffect(() => {
    api.get('/task').then((res) => {
      setTasks(res.data.sort(compare));
    }).catch((error) => {
      console.log(error);
    });
  }, [route.params?.refresh]);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <TouchableOpacity onPress={handleNavigateToRegistration}>
        <Text style={styles.buttonText}>New task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    height: "100%",
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: colors.text,
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    padding: 10,
    color: colors.text,
    backgroundColor: colors.lightPrimary,
    borderRadius: 6,
    elevation: 5,
  },
});

import { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles, locale } from '../../themes';

export const Show = () => {
  const [task, setTask] = useState(null);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const route = useRoute();

  useEffect(() => {
    setTask({
      title: route.params.task.title,
      details: route.params.task.details,
      createdAt: (new Date(route.params.task.createdAt)).toLocaleString(locale, { timeZone: 'UTC' }),
      completedAt: route.params.task.completedAt
        ? (new Date(route.params.task.completedAt)).toLocaleString(locale, { timeZone: 'UTC' })
        : null,
    });
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Show the task</Text>
      </View>
      <View style={styles.addContainer}>
        <Text style={styles.label}>Created at:</Text>
        <TextInput
          editable={false}
          value={task?.createdAt}
          style={styles.input}
        />
        <Text style={styles.label}>Title:</Text>
        <TextInput
          editable={false}
          value={task?.title}
          style={styles.input}
        />
        <Text style={styles.label}>Details:</Text>
        <TextInput
          editable={false}
          value={task?.details}
          multiline={true}
          numberOfLines={4}
          style={[styles.input, {verticalAlign: 'top'}]}
        />
        {task?.completedAt && (
          <>
            <Text style={styles.label}>Completed at:</Text>
            <TextInput
              editable={false}
              value={task?.completedAt}
              style={styles.input}
            />
          </>
        )}
      </View>
    </View>
  )
};

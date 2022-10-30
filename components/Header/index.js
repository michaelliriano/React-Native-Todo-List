import { StyleSheet, View } from "react-native";
import { Button, SearchBar } from "react-native-elements";

export default function Header({
  todo,
  todos,
  setTodo,
  setTodos,
  setSelectedTodo,
  selectedTodo,
  resetTodo,
}) {
  return (
    <View style={styles.input}>
      <SearchBar
        lightTheme
        round
        value={todo.name}
        containerStyle={{ marginTop: 20 }}
        onChangeText={(v) => setTodo({ ...todo, name: v })}
      />
      {!!selectedTodo ? (
        <Button
          title="Update"
          disabled={todo.name.length < 3}
          style={{ marginTop: 10 }}
          onPress={() => {
            const index = todos.findIndex((t) => t.id === selectedTodo.id);
            const newTodos = [...todos];
            newTodos.splice(index, 1, { ...todo });
            setTodos(newTodos);
            setSelectedTodo(null);
            resetTodo();
          }}
        />
      ) : (
        <Button
          title="Add"
          disabled={todo.name.length < 3}
          style={{ marginTop: 5 }}
          onPress={() => {
            setTodos([...todos, { ...todo, id: todos.length + 1 }]);
            resetTodo();
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 30,
    fontSize: 30,
  },
});

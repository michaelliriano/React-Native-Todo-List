import { StyleSheet, View, FlatList } from "react-native";
import { ThemeProvider, Text } from "react-native-elements";
import Header from "./components/Header";
import Todo from "./components/Todo";
import useTodos from "./hooks/useTodos";

export default function App() {
  const {
    todos,
    setTodos,
    selectedTodo,
    setSelectedTodo,
    todo,
    setTodo,
    resetTodo,
    toggleComplete,
  } = useTodos();
  return (
    <ThemeProvider>
      <Header
        todo={todo}
        todos={todos}
        selectedTodo={selectedTodo}
        setTodos={setTodos}
        setSelectedTodo={setSelectedTodo}
        setTodo={setTodo}
        resetTodo={resetTodo}
      />
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({ item, index }) => (
            <Todo
              item={item}
              index={index}
              todos={todos}
              setTodo={setTodo}
              setSelectedTodo={setSelectedTodo}
              setTodos={setTodos}
              toggleComplete={toggleComplete}
            />
          )}
        />
        {!todos.length && <Text style={styles.message}>No todos added.</Text>}
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  message: {
    textAlign: "center",
    marginTop: 50,
  },
});

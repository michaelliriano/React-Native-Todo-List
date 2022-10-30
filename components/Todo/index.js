import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, Card } from "react-native-elements";

export default function Todo({
  item,
  index,
  setTodos,
  toggleComplete,
  setSelectedTodo,
  setTodo,
  todos,
}) {
  const todo = item;
  return (
    <Card key={todo.id}>
      <View style={styles.todo}>
        <Text
          onPress={() => toggleComplete(todo, index)}
          style={{
            width: "50%",
            color: "#000",
            textDecorationLine: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.name}
        </Text>
        <Button
          title="Update"
          containerStyle={{ marginLeft: 30, marginRight: 10 }}
          buttonStyle={{ backgroundColor: "#FFCA2B", color: "#000" }}
          onPress={() => {
            setSelectedTodo(todo);
            setTodo(todo);
          }}
        />
        <Button
          title="Delete"
          buttonStyle={{ backgroundColor: "crimson" }}
          onPress={() => setTodos(todos.filter((t) => t.id !== todo.id))}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  todo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});

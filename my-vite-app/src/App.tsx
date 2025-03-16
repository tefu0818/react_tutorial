import { useState } from "react";
import "./App.css";

// TodoItemコンポーネント - 個々のTodoアイテムを表示
interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TodoItem({ id, text, completed, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className={completed ? "completed" : ""}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span>{text}</span>
      <button onClick={() => onDelete(id)}>削除</button>
    </li>
  );
}

// TodoFormコンポーネント - 新しいTodoを追加するフォーム
interface TodoFormProps {
  onAdd: (text: string) => void;
}

function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新しいタスクを入力..."
      />
      <button type="submit">追加</button>
    </form>
  );
}

// メインのAppコンポーネント
function App() {
  // Todoリスト用のstate
  const [todos, setTodos] = useState<
    Array<{ id: number; text: string; completed: boolean }>
  >([
    { id: 1, text: "Reactを学ぶ", completed: false },
    { id: 2, text: "Viteの設定を理解する", completed: false },
    { id: 3, text: "TypeScriptを使いこなす", completed: false },
  ]);

  // 新しいTodoを追加する関数
  const addTodo = (text: string) => {
    const newId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
    setTodos([...todos, { id: newId, text, completed: false }]);
  };

  // Todoの完了状態を切り替える関数
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Todoを削除する関数
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>シンプルTodoリスト</h1>
      <TodoForm onAdd={addTodo} />

      <div className="todo-list">
        <h2>タスク一覧</h2>
        {todos.length === 0 ? (
          <p>タスクがありません</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

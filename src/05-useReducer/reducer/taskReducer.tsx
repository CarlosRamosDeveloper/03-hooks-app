interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  pending: number;
  completed: number;
}

export type TaskAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number };

export const getTasksInitialState = (): TaskState => {
  return {
    todos: [],
    completed: 0,
    length: 0,
    pending: 0,
  };
};

export const taskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo = handleAdd(action.payload);

      return {
        ...state,
        length: state.todos.length + 1,
        pending: state.pending + 1,
        todos: [...state.todos, newTodo],
      };
    }
    case 'TOGGLE_TODO': {
      const updatedTodos = handleToggle(state, action.payload);
      const completedTodos = updatedTodos.filter(
        (todo) => todo.completed,
      ).length;
      const pendingTodos = updatedTodos.length - completedTodos;

      return {
        ...state,
        length: updatedTodos.length,
        pending: pendingTodos,
        completed: completedTodos,
        todos: updatedTodos,
      };
    }
    case 'DELETE_TODO': {
      const updatedTodos = handleDelete(state, action.payload);
      const completedTodos = updatedTodos.filter(
        (todo) => todo.completed,
      ).length;
      const pendingTodos = updatedTodos.length - completedTodos;

      return {
        ...state,
        length: updatedTodos.length,
        pending: pendingTodos,
        completed: completedTodos,
        todos: updatedTodos,
      };
    }
    default:
      return state;
  }
};

const handleAdd = (payload: string): Todo => {
  const newTodo: Todo = {
    id: Date.now(),
    text: payload.trim(),
    completed: false,
  };

  return newTodo;
};

const handleToggle = (state: TaskState, payload: number): Todo[] => {
  return state.todos.map((todo) => {
    if (todo.id === payload) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
};

const handleDelete = (state: TaskState, payload: number) => {
  return state.todos.filter((todo) => todo.id !== payload);
};

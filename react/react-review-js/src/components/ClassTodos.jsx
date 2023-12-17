import { Component } from 'react';
import PropTypes from 'prop-types';

class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count } = this.props;

    return <h5>Number of todos: {count}</h5>;
  }
}

Count.propTypes = {
  count: PropTypes.number,
};

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: props.todo,
      isEditing: false,
    };

    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleEditSubmit(event) {
    event.preventDefault();

    const { todo: prevTodo, onEdit } = this.props;

    this.setState((state) => {
      let edited;
      if (state.isEditing) edited = onEdit(state.todo, prevTodo);
      return {
        ...state,
        todo: edited ? state.todo : prevTodo,
        isEditing: !state.isEditing,
      };
    });
  }

  handleInputChange(event) {
    this.setState((state) => ({ ...state, todo: event.target.value }));
  }

  render() {
    const { onDelete } = this.props;
    const { todo, isEditing } = this.state;

    return (
      <li>
        <form onSubmit={this.handleEditSubmit}>
          {!isEditing && todo}
          {isEditing && (
            <input
              type="text"
              name="edit-task"
              value={todo}
              onChange={this.handleInputChange}
            />
          )}
          <button>{isEditing ? 'Resubmit' : 'Edit'}</button>
        </form>
        <button onClick={() => onDelete(todo)}>Delete</button>
      </li>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

class ClassTodos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      input: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTodoEdit = this.handleTodoEdit.bind(this);
    this.handleTodoDelete = this.handleTodoDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState((state) => ({
      ...state,
      input: event.target.value,
    }));
  }

  handleTodoEdit(editedTodo, oldTodo) {
    // If the edited todo already exists then don't let
    // the previous to be edited so that there are no
    // two same todos
    if (this.state.todos.some((todo) => todo === editedTodo)) {
      return false;
    }

    this.setState((state) => ({
      ...state,
      todos: state.todos.map((todo) => (todo === oldTodo ? editedTodo : todo)),
    }));
    return true;
  }

  handleTodoDelete(todoToDelete) {
    this.setState((state) => ({
      ...state,
      todos: state.todos.filter((todo) => todo !== todoToDelete),
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState((state) => {
      const { input, todos } = state;
      if (todos.some((todo) => todo === input)) {
        return { ...state, input: '' };
      }

      return {
        ...state,
        todos: [...state.todos, state.input],
        input: '',
      };
    });
  }

  render() {
    const { name } = this.props;
    const { input, todos } = this.state;

    return (
      <section>
        <h3>{name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={input}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <Count count={todos.length} />
        <ul>
          {!todos.length && <li>No todos yet...</li>}
          {!!todos.length &&
            todos.map((todo) => (
              <Todo
                key={todo}
                todo={todo}
                onEdit={this.handleTodoEdit}
                onDelete={this.handleTodoDelete}
              />
            ))}
        </ul>
      </section>
    );
  }
}

ClassTodos.propTypes = {
  name: PropTypes.string,
};

export default ClassTodos;

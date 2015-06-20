import { Store } from 'flummox';

class TodoStore extends Store {
  constructor(flux) {
    super();

    const todoIds = flux.getActionIds('pomo');

    this.state = {
      todos: {}
    };
  }
}

export default TodoStore;

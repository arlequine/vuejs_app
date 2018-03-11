import AppHeader from './components/AppHeader'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import Pagination from './components/Pagination'
export default {
  name: 'App',
  components: {
    AppHeader,
    TodoInput,
    TodoItem,
    Pagination
  },
  data() {
    return{
      todos: [
        {id: 0, text: "make a dinner"},
        {id: 1, text: "do exercise"},
        {id: 2, text: "Todo #2"},
        {id: 3, text: "Todo #3"},
        {id: 4, text: "Todo #4"},
        {id: 5, text: "Todo #5"},
        {id: 6, text: "Todo #6"},
        {id: 7, text: "Todo #7"},
        {id: 8, text: "Todo #8"},
        {id: 9, text: "Todo #9"},
        {id: 10, text: "Todo #10"},
        {id: 11, text: "Todo #11"},
        {id: 12, text: "Todo #12"},
        {id: 13, text: "Todo #13"}
      ],
      nextId: 14,
      currentPage: 0,
      pageSize: 3,
      visibleTodos: []
    };
  },
  beforeMount: function() {
    this.updateVisibleTodos();
  },
  methods: {
    addTodo(text) {
      this.todos.push({id: this.nextId, text: text});
      this.nextId++;
      this.updateVisibleTodos();
    },
    removeTodo(id) {
      let todos = this.todos;
      this.todos = todos.filter((todo) => todo.id != id);
      this.updateVisibleTodos();
    },
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleTodos();
    },
    updateVisibleTodos() {
      this.visibleTodos = this.todos.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
      //if we 0 visible todos, go back a page
      if (this.visibleTodos.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
    },
  }
}

<template>
  <div id="app">
    <div class="todo-wrapper">
      <app-header></app-header>
      <todo-input v-on:todo:add="addTodo" ></todo-input>
      <todo-item v-for="todo in visibleTodos"
        :visibleTodos="visibleTodos"
        :currentPage="currentPage"
        :todo="todo"
        v-on:todo:remove="removeTodo"
        :key="todo.id" >
      </todo-item>
      <pagination
      :todos="todos"
      v-on:page:update="updatePage"
      :currentPage="currentPage"
      :pageSize="pageSize">
      </pagination>
    </div>
  </div>
</template>

<script src="./app.js"></script>
<style src="./app.css"></style>

<template lang="html">
  <div class="todoWrapper">
    <button class="removeTodo" v-on:click="removeTodo" name="button">remove</button>{{todo.text}}
  </div>
</template>

<script src="./todoItem.js"></script>
<style src="./todoItem.css"></style>

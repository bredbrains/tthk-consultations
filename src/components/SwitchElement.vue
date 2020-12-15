<template>
  <label class="toggle-control">
  <input type="checkbox" v-model="switchIsChecked">
  <span class="control"></span>
</label>
</template>

<script>
export default {
  name: 'SwitchElement'
}
</script>

<style scoped>
.toggle-control {
  display: flex;
  position: relative;
  cursor: pointer;
  margin-top: 2px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.toggle-control input {
  position: relative;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 20px;
}
.toggle-control input:checked ~ .control {
  background-color: #A22538;
}
.toggle-control input:checked ~ .control:after {
  left: 25px;
}
.toggle-control .control {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 40px;
  border-radius: 25px;
  background-color: darkgray;
  -webkit-transition: background-color 0.15s ease-in;
  transition: background-color 0.15s ease-in;
}
.toggle-control .control:after {
  content: "";
  position: absolute;
  left: 5px;
  top: 5px;
  width: 10px;
  height: 10px;
  border-radius: 25px;
  background: white;
  -webkit-transition: left 0.15s ease-in;
  transition: left 0.15s ease-in;
}


</style>
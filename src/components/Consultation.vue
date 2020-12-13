<template>
  <div class="consultation">
    <div class="info">
      <div class="teacher">
        {{consultation.teacher}}
      </div>
      <div class="place">
        <span class="room">{{consultation.room}}</span>
        <span class="department">{{estonian[consultation.department]}}</span>
      </div>
    </div>
    <div class="consultation-times">
      <div class="consultation-time" v-for="(time, i) of consultation.times" :key="i"
           v-bind:time="time"
           v-bind:index="i">
        <div class="weekday">{{estonian[time.weekday]}}</div>
        <div class="time">{{time.time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import estonian from '../assets/ee-EE.json'

export default {
  props: ['consultation', 'index'],
  name: "Consultation",
  data() {
    return {
      estonian: estonian
    }
  }
}
</script>

<style scoped>
.consultation {
  display: flex;
  vertical-align: middle;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 300px;
  margin-bottom: 10px;
}

.info {
  display: flex;
  flex-direction: column;
}

.info > * {
  margin: 0 5px;
}

.teacher {
  text-align: center;
  font-weight: bold;
  color: #A22538;
}

.place {
  display: flex;
  justify-content: center;
}

.place > * {
  margin: 0 5px;
}

.consultation-times {
  display: flex;
  flex-direction: row;
}

.consultation-time > * {
  margin: 0 5px;
}
</style>
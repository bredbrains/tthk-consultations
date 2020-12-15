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
      <div v-if="consultation.email">
        <a :href="'mailto:' + consultation.email.toLowerCase() + '?subject=Konsultatsioon'" class="email">{{consultation.email.toLowerCase()}}</a>
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
  font-weight: bold;
  color: #A22538;
}

.email {
  font-style: italic;
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
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.consultation-time > * {
  margin: 0 5px;
}

.consultation-time .weekday {
  font-weight: 500;
}

@media only screen and (max-width: 750px) {
  .consultation {
    width: 100%;
  }
}
</style>
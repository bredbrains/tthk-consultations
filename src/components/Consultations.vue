<template>
  <div id="consultations">
    <Consultation v-for="(consultation, i) in consultations"
                  v-bind:index="i"
                  v-bind:consultation="consultation" :key="i"/>
  </div>
</template>

<script>
import Consultation from "@/components/Consultation"

export default {
  props: ['consultations'],
  name: "Consultations",
  components: {
    Consultation
  }
}
</script>

<style scoped>
  #consultations {
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 750px) {
  #consultations {
    flex-direction: column;
  }
}
</style>

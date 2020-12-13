<template>
  <div id="consultations">
    <Consultation v-for="(consultation, i) in consultations"
                  v-bind:index="i"
                  v-bind:consultation="consultation" :key="i"
    ></Consultation>
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
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
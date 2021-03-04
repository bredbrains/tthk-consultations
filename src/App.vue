<template>
  <div id="app">
    <nav class="backgrounded">
      <img src="./assets/tthklogo.png" id="logo" alt="TTHK logo">
      Konsultatsioonid
    </nav>
    <form id="filter-form" @submit.prevent>
      <label for="search">Otsing</label>
      <input type="text" name="search" id="search" v-model="teacherName" placeholder="Jaanus Tamm">
      <label for="weekday"></label>
      <select name="weekday" id="weekday" v-model="weekday">
        <option value="all" selected>Nädalapäev</option>
        <option value="Monday">Esmaspäev</option>
        <option value="Tuesday">Teisipäev</option>
        <option value="Wednesday">Kolmapäev</option>
        <option value="Thursday">Neljapäev</option>
        <option value="Friday">Reede</option>
      </select>
      <label for="department"></label>
      <select name="department" id="department" v-model="department">
        <option value="all" selected>Õppevaldkond</option>
        <option value="general">Üldained</option>
        <option value="infotechnology">Infotehnoloogia</option>
        <option value="mechanics">Mehaanika ja metallitöötlus</option>
        <option value="logistics">Logistika</option>
        <option value="energy">Energetika ja automaatika</option>
        <option value="textile">Tekstiil ja kaubandus</option>
      </select>
      <a v-on:click.prevent="clearSearch()" href="#">Kustuta</a>
    </form>
    <hr>
    <Loader v-if="loading" />
    <Consultations v-else-if="filteredConsultations.length"
                   v-bind:consultations="filteredConsultations"/>
    <div class="none" v-else>Konsultatsioonid, mis vastavad teie päringule puuduvad.</div>
    <footer class="backgrounded">
      <p>© Nikolas Laus, 2020 <a href="https://github.com/bredbrains/tthk-consultations"><i class="fab fa-github"></i></a></p>
      <p>Built on <a href="https://vuejs.org"><i class="fab fa-vuejs"></i> Vue.js</a> & <a href="https://github.com/bredbrains/tthk-api">tthkAPI</a> with <i class="fas fa-heart"></i></p>
    </footer>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import Consultations from "@/components/Consultations"
import axios from 'axios'
// TODO: Switch Element for grid/row switching.

export default {
  name: 'App',
  components: {
    Consultations,
    Loader
  },
  data() {
    return {
      consultations: [],
      loading: true,
      department: 'all',
      weekday: 'all',
      teacherName: ''
    }
  },
  mounted() {
    axios.get('https://bredbrains.tech/api/consultations')
        .then(response => {
          let json = response.data
          this.consultations = json.data
          this.loading = false
        })
        .catch(error => console.log(error))
  },
  computed: {
    filteredConsultations() {
      var currentConsultations = this.consultations;
      if (this.department !== 'all') {
        currentConsultations = currentConsultations.filter(c => c.department === this.department)
      }
      if (this.weekday !== 'all') {
        currentConsultations = currentConsultations.filter(c => c.times.some(t => t.weekday === this.weekday))
      }
      if (this.teacherName !== '') {
        currentConsultations = currentConsultations.filter(c => c.teacher.includes(this.teacherName))
      }
      return currentConsultations;
    }
  },
  methods: {
    clearSearch() {
      this.department = 'all';
      this.weekday = 'all';
      this.teacherName = '';
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#logo {
  height: 30px;
  margin-right: 10px;
  vertical-align: middle;
}

.backgrounded {
  background: #A22538;
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  width: 100%;
  box-sizing: border-box;
}

footer a {
  color: white;
  text-decoration: none;
  margin-left: 5px;
}

nav {
  margin-bottom: 10px;
}

footer {
  margin-top: 10px;
}

#filter-form {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: center;
}

#filter-form > a {
  color: #A22538;
  text-decoration: none;
  font-weight: bold;
}

#filter-form > * {
  margin-right: 10px;
  padding: 3px;
}

.none {
  display: flex;
  justify-content: center;
  text-align: center;
  color: #A22538;
  font-weight: bold;
}

@media only screen and (max-width: 750px) {
  #filter-form {
    flex-direction: column;
    margin: 10px 20%;
    text-align: center;
  }

  #filter-form > * {
    margin-bottom: 3px;
  }

  label[for='search'] {
    font-size: 2rem;
    font-weight: 600;
  }
}
</style>

<template>
  <div class="home">
    <spinner :start="false" />
    <div class="container">

      <!-- Start header page -->
      <div class="header-page">
        <img alt="Vue logo" src="../assets/pokemon.png" />
        <!-- Start Filter -->
        <div class="filter-pokemon">
          <input type="text" class="input-filter" placeholder="Search Pokemon" v-model="search" />
        </div>
        <!-- End Filter -->
      </div>
      <!-- Start Header Page -->
      
      <!-- Start list Pokemon -->
      <div class="list-pokemon">
        <div class="card-pokemon"  v-for="(pok, index) in filterPokemon" :key="index">
            <router-link :to="'/pokemon/' + pok.name">
              <div class="box-pokemon">
                <div>
                  <img :src="imageUrl + pok.name + '.gif'" alt="">
                </div>
                <h5 class="name">{{pok.name}}</h5>

              </div>
            </router-link>
        </div>
      </div>
      <!-- End list Pokemon -->

    </div>
  </div>
</template>

<script>

// //  import axios
import axios from 'axios';
import spinner from "@/components/Spinner.vue";
export default {
  name: "pokemon",
  components:{spinner},
  data() {
    return {
      pokemons: [],
      imageUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/',
      search: '',
      start: false
    }
  },
  created() {
    // get data from api using axios
    this.start = true
    axios.get('https://pokeapi.co/api/v2/pokemon/').then(res => {
      this.start = false;
      this.pokemons = res.data.results
    }).catch(error => {
      console.log(error);
      this.start= false;
    })
  },
  computed: {
    // Start Filter 
    filterPokemon() {
        return this.pokemons.filter((pok) => {
            return pok.name.match(this.search);
        });
    },
  },
  
};
</script>

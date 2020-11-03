<template>
    <div class="container">
        <div class="single-pokemon">
            <router-link to="/pokemon" tag="div">
                <span  class="close">X</span>
            </router-link>
            
            <img :src="imageUrl + pokemon + '.gif'" :alt="name" class="image-pok">
            <h3 class="name-pok">{{ pokemon }}</h3>
            <div class="info">
                <p  class="item"><Strong>ID:</Strong> {{id}}</p>
                <div class="item">
                    <strong>Type:</strong> <span v-for="(ty, t) in types" :key="'t' + t" >  {{ty.type.name}}</span>
                </div>
                <p class="item"> <strong>Height:</strong> {{height}}</p>
                <p ><strong>Abilities:</strong></p>
                <ul >
                    <li v-for="(ab, index) in abilities" :key="index">
                        {{ab.ability.name}}
                    </li>
                </ul>

            </div>

            
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name:"singlePokemon",
        data() {
            return {
                name: this.$route.params.name,
                pokemon: {},
                abilities: {},
                types: {},
                imageUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/',
                id:{},
                height: {}
            };
        },
        created() {
            axios.get('https://pokeapi.co/api/v2/pokemon/' + this.name).then((res) => {
                console.log(res);
                
                this.pokemon = res.data.name
                this.id = res.data.id
                this.height = res.data.height
                this.abilities = res.data.abilities
                this.types = res.data.types
            }).catch(error => {
                if(error.response.status == 404){
                    this.$router.push({name : 'pokemon'});
                }
            })
        },
        
    };
</script>
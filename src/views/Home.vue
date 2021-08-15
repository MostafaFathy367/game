<style lang="scss">
.card-container {
  width: 18%;
  margin: 10px;
  padding: 15px;
  &[data-card-type="green"]{
    background-color: green;
  }
  &[data-card-type="black"]{
    background-color: black;
  }
  &[data-card-type="yellow"]{
    background-color: yellow;
  }
}

</style>

<template>
  <div class="container">
      <h2>{{count}}</h2>
      <div class="row">
        <div class="card-container" data-card-type="green" v-for="(card,index) in greenCard" :key="card + index" :id="card" @click="changeColor('green',card)">
          <card-component >
            <template v-slot:cardTitle>
              <h4>{{card}}</h4>
            </template>
          </card-component>
        </div>
        <div class="card-container" data-card-type="black"  v-for="(card,index) in balckCard" :key="card+index" :id="card" @click="changeColor('black',card)">
          <card-component >
            <template v-slot:cardTitle>
              <h4>{{card}}</h4>
            </template>
          </card-component>
        </div>
        <div class="card-container" data-card-type="yellow" v-for="(card,index) in yellowCard" :key="card + index" :id="card" @click="changeColor('yellow',card)">
          <card-component>
            <template v-slot:cardTitle>
              <h4>{{card}}</h4>
            </template>
          </card-component>
        </div>
      </div><!-- End row -->
     </div><!-- End Container  -->
</template>

<script>
import CardComponent from "../components/CardComponent.vue";
export default {
  components:{CardComponent},
  data(){
    return {
      greenCard:["AFRICA", "AGENT", "AIR", "ALIEN", "ALPS", "AMAZON", "AMBULANCE", "AMERICA", "ANGEL", "ANTARCTICA", "APPLE", "ARM", "ATLANTIS"],
      balckCard:["DRUM", "BRIDE", "WAGON" ],
      yellowCard:["ACID", "ALCOHOL", "ANIMAL", "APPLES", "ASHES", "ASS", "BACON", "BAKED", "BALLOON"],
      count:0
    }
  },
  methods:{
    changeColor(color,_id){
      document.getElementById(_id).style.backgroundColor = color;
      var cardType = document.getElementById(_id).getAttribute("data-card-type");
      console.log(cardType)
      if(cardType === "black") {
        alert("Game Over")
        document.querySelectorAll(".card-container").forEach((card)=>{
          card.style.backgroundColor = "transparent";
        });
        this.count = 0;
      } else if(cardType === "yellow") {
        this.count ++;
        document.querySelectorAll(".card-container").forEach((card)=>{
          card.style.backgroundColor = "transparent";
        });
        if(this.count === 4) {
          alert("Congratulation")
        }
      }
    },
    random(){
      var cards = document.querySelectorAll(".card-container");
      var arr = Array.from(Array(cards.length).keys());
      let current = arr.length,
      temp,
      random;
      while (current > 0) {
        random = Math.floor(Math.random() * current);
        current--;
        temp = arr[current];
        arr[current] = arr[random];
        arr[random] = temp;
      }
      for (let i = 0; i < cards.length; i++) {
        cards.forEach((ele, inde) => {
          ele.style.order = arr[inde]
        })
      }
    
  }
  },
  mounted(){
  this.random()
  }
}
</script>

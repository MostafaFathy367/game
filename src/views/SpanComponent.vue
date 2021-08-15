<style lang="scss">
.card-container {
  width: 18%;
  margin: 10px;
  padding: 15px;
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

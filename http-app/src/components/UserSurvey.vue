<template>
  <section>
    <base-card>
      <h2>How you can rate the shopping experience</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">User Name: <input type="text" id="name" name="name" v-model="enteredName"/></div>
        <h3>My Shopping exp was</h3>
        <div class="form-control">
          <input type="radio" id="rating-great" value="great"  name="rating" v-model="choosenRating"/>
          Great
        </div>
        <div class="form-control">
          <input type="radio" id="rating-average" value="average"  name="rating" v-model="choosenRating"/>
          Average
        </div>
        <div class="form-control">
          <input type="radio" id="rating-poor" value="poor"  name="rating" v-model="choosenRating"/>
          Poor
        </div>
        <p>please check the correct value</p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {

    data() {
        return {
            enteredName:'',
            choosenRating:null,
            invalidInput: false
        }
    },
    emits:['survey-submit'],
    methods: {
        submitSurvey(){
            if(this.enteredName == '' || !this.choosenRating ){
                this.invalidInput=true
                return
            }
            this.invalidInput=false
            this.$emit('survey-submit',{
                userName:this.enteredName,
                rating:this.choosenRating
            })
        }
    },

};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}
input[type="text"] {
  display: block;
  width: 25rem;
  margin-top: 0.5rem;
}
</style>
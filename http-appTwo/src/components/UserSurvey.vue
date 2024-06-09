<template>
  <section>
    <base-card>
      <h2>How you can rate the shopping experience</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          User Name:
          <input type="text" id="name" name="name" v-model="enteredName" />
        </div>
        <h3>My Shopping exp was</h3>
        <div class="form-control">
          <input type="radio" id="rating-great" value="great" name="rating" v-model="choosenRating" />
          Great
        </div>
        <div class="form-control">
          <input type="radio" id="rating-average" value="average" name="rating" v-model="choosenRating" />
          Average
        </div>
        <div class="form-control">
          <input type="radio" id="rating-poor" value="poor" name="rating" v-model="choosenRating" />
          Poor
        </div>
        <p v-if="invalidInput" style="color: red;">Please enter a username and select a rating.</p>
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
      enteredName: '',
      choosenRating: null,
      invalidInput: false,
    };
  },
  methods: {
      // emits:['survey-submit'],
    submitSurvey() {
      if (this.enteredName === '' || !this.choosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

            // this.$emit('survey-submit',{
            //     userName:this.enteredName,
            //     rating:this.choosenRating
            // }

      const url = 'https://capone-62225-default-rtdb.firebaseio.com/survey.json';
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.enteredName,
          rating: this.choosenRating
        })
      }).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }).then((data) => {
        console.log('Success:', data);
      }).catch((error) => {
        console.error('Error:', error);
      });

      this.enteredName = '';
      this.choosenRating = null;
    }
  },
};
</script>
y
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
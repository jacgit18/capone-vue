<template>
  <section>
    <base-card>
      <h2>User shop feed</h2>
      <div>
        <base-button @click="loadFeedbacks">Load all feedback</base-button>
      </div>

      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No feedback found</p>

      <ul v-else>
        <survey-results 
          v-for="result in results" 
          :key="result.id" 
          :name="result.name" 
          :rating="result.rating">
        </survey-results>
      </ul>
    </base-card>
  </section>
</template>

<script>
import ResultsApp from './ResultsApp.vue';

export default {
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    };
  },
  methods: {
    loadFeedbacks() {
      this.isLoading = true;
      this.error = null;
      const url = 'https://capone-62225-default-rtdb.firebaseio.com/survey.json';

      fetch(url).then((response) => {
        return response.json();
      }).then((data) => {
        this.isLoading = false;
        const results = [];
        for (const id in data) {
          results.push({
            id: id,
            name: data[id].username,
            rating: data[id].rating
          });
        }
        this.results = results;
      }).catch((error) => {
        console.log(error);
        this.isLoading = false;
        this.error = 'Unable to load';
      });
    }
  },
  mounted() {
    this.loadFeedbacks();
  },
  components: {
    'survey-results': ResultsApp
  }
};
</script>

<style scoped>
li {
  margin: 1em 0;
  border: 1px solid salmon;
  padding: 1rem;
}

.highlight {
  font-weight: bold;
}

.rating--poor {
  color: red;
}

.rating--average {
  color: darkblue;
}

.rating--great {
  color: green;
}
</style>

<template>
  <v-card
    class="pa-3 grey lighten-2"
    flat
  >
    <v-toolbar
      dense
      floating
    >
      <v-text-field
        v-model="searchString"
        hide-details
        prepend-icon="search"
        single-line
        placeholder="search menu"
        @input="changeSearch"
      ></v-text-field>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchString: ""
    };
  },
  methods: {
    changeSearch() {
      this.$store.dispatch("searchMenu", this.searchString);
    }
  }
};
</script>
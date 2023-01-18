<template>
    <div ref="autocompleteContainer"></div>
  </template>
  
  <script>
    import { createWidgetMixin } from 'vue-instantsearch/vue2/es';
    import { connectSearchBox } from 'instantsearch.js/es/connectors';
  
    export default {
      mixins: [createWidgetMixin({ connector: connectSearchBox })],
    };
  </script>
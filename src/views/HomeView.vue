<script>
import home from "../components/HomeCom.vue";
import location from "@/stores/location";
import { mapActions } from "pinia";

export default {
  methods: {
    ...mapActions(location, ["setPages"]),
  },
  mounted() {
    this.setPages(1);
  },
  components: {
    home,
  },
};
</script>

<template>
  <home />
</template>

<style scoped lang="scss">

</style>

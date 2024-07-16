<script>
import Home from "../components/HomeCom.vue";
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
    Home,
  },
};
</script>

<template>
    <Home />
</template>

<style scoped lang="scss">

</style>

<script>
import waterData from "../components/water/waterData.vue";
import waterLine2 from "../components/water/waterLine2.vue";
import location from "@/stores/location";
import { mapActions } from "pinia";

export default {
  methods: {
    ...mapActions(location, ["setPages"]),
  },
  mounted() {
    this.setPages(3);
  },
  components: {
    waterData,
    waterLine2,
  },
};
</script>

<template>
  <waterData />
  <waterLine2 />
</template>

<style scoped lang="scss"></style>

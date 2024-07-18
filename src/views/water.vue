<script>
import waterCom from "../components/water/waterCom.vue";
import waterLine from "../components/water/waterLine.vue";
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
    waterCom,
    waterLine,
    waterLine2,
  },
};
</script>

<template>
  <waterCom />
  <waterLine />
  <waterLine2 />
</template>

<style scoped lang="scss"></style>

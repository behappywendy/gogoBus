<template>
  <button class="button" @click="$emit('clickDistanceButton', $event)">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "DistanceButton",
  methods: {},
  emits: ["clickDistanceButton"],
};
</script>
<style lang="scss" scoped>
button {
  width: 50%;
  font-size: 14px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  color: var(--content_background);
  height: 32px;
  border: 0;
}
button:hover {
  background: #99badd;
  border-radius: 0px;
  color: #363636;
}
</style>

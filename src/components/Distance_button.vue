<template>
  <button class="button">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "DistanceButton",
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
  background: pink;
  border-radius: 0px;
  border: 2px solid green; 
}
</style>

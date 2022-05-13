<template>
  <select
    :value="selectedValue"
    @input="$emit('update:selectedValue', $event.target.value)"
  >
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>
<script>
export default {
  name: "dropDown",
  props: ["options", "selectedValue"],
  emits: ["update:selectedValue"],
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped lang="scss"></style>

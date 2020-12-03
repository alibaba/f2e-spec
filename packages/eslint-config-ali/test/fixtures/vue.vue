<template>
  <div style="margin: 20px;">
    <textarea>{{ value }}</textarea>
  </div>
</template>

<script lang="js">
export default {
  data() {
    const bo = import('./foo');
    return {
        value: 'value',
    };
  },
};
</script>

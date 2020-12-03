<template>
  <div style="margin: 20px;">
    <textarea>{{ value }}</textarea>
    <img class="image-viewer__thumbnails" :src="imageUrl" @click="clickHandler" />
    <div v-show="visible" class="image-viewer__wrapper">
      <i class="image-viewer__closebtn" @click="closeHandler" />
      <div class="image-viewer__img">
        <img :src="imageUrl" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ImageViewer extends Vue {
  @Prop(String) readonly imageUrl;

  visible = false;

  closeHandler() {
    this.visible = false;

      const foo: number = 1
  }

  clickHandler() {
    this.visible = true;
  }
}
</script>

<style lang="scss">
</style>

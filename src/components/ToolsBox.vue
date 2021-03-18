<template>
  <div id="toolsbox">
    <div class="gridElement">
      <i id="drum" class="fas fa-drum icons"></i>
    </div>
    <div class="gridElement">
      <i id="guitar" class="fas fa-guitar icons"></i>
    </div>
    <div class="gridElement">
      <i id="elec" class="fas fa-plug icons"></i>
    </div>
  </div>
</template>

<script>
import TweenMax from "gsap";
import Draggable from "gsap/Draggable";
export default {
  name: "ToolsBox",
  mounted() {
    const that = this; // pour que le this.$store fonctione
    Draggable.create(".icons", {
      type: "x,y",
      onRelease: function () {
        if (this.hitTest("#stage")) {
          const newIconsClassName = this.target.className + "In";
          that.$store.dispatch("addToStage", newIconsClassName);
          TweenMax.to(this.target, 0.5, { x: 0, y: 0 });
        } else {
          TweenMax.to(this.target, 0.5, { x: 0, y: 0 });
        }
      },
    });
  },
};
</script>

<style scoped>
#toolsbox {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 2px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  width: 14rem;
  height: 30rem;
  position: fixed;
  left: 5%;
  top: 28%;
}
.gridElement {
  display: flex;

  justify-content: center;
  align-items: center;
  font-size: 50px;
}
.icons {
  position: relative;
}
</style>
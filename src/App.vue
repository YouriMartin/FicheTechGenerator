<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>
<style>
#app {
  height: 100vh;
  display: grid;
  grid-template-areas:
    "nav  "
    "main "
    "footer";
  align-content: space-between;
}
#nav {
  grid-area: nav;
}
#footer {
  grid-area: footer;
}
#home,
#generator,
#fichelist,
#contact {
  grid-area: main;
  height: 100%;
}
table {
  position: relative;
  top: -5%;
  margin-bottom: -40px;
  border-collapse: collapse;
  border: black 1px solid;
}

td {
  height: 12px;
  padding: 0;
}
.inputPatch {
  border: black 1px solid;
  font-size: 12px;
  height: 100%;
  text-align: center;
}
.inputPatch:focus {
  outline: none;
}
</style>

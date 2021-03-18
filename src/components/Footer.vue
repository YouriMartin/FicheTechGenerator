<template>
  <div id="footer">
    <div id="footerBottom">
      <p>&copy; {{ getYear }} Copyright: FichetechGenerator.com</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    getYear: () => {
      let date = new Date();
      let annee = date.getFullYear();
      return annee;
    },
  },
};
</script>
<style  scoped>
#footer {
  background-color: #1e1e1e;
  width: 100%;
  height: 2vh;
}

#footerBottom {
  font-size: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  height: 20%;
  width: 100%;
  color: white;
}
</style>
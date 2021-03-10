<template>
  <div id="footer">
    <div id="footerTop">
      <div class="footerItems">
        <h6>Informations :</h6>
      </div>
      <div class="footerItems">
        <h6>Contacts :</h6>
        <i class="fab fa-github-square"></i>
        <i class="fas fa-envelope"></i>
      </div>
      <div class="footerItems">
        <h6>Liens :</h6>
      </div>
    </div>
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
  height: 15vh;
 /* grid-area: footer;*/
}
#footerTop {
  background-color: #bcbcbc;
  height: 80%;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 20px;
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
<template>
  <div id="generator">
    <ToolsBox />
    <Feuille />
    <div class="buttonBox">
      <button @click="createPdf">Sauvegarder</button>
    </div>
  </div>
</template>
<script>
import ToolsBox from "@/components/ToolsBox.vue";
import Feuille from "@/components/Feuille.vue";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default {
  name: "Generator",
  components: {
    ToolsBox,
    Feuille,
  },
  methods: {
    createPdf() {
      window.scrollTo(0, 0);
      let feuilleId = document.getElementById("feuille");
      feuilleId.classList.remove("shadow");
      let feuilleRender = document.querySelector("#feuille");
      html2canvas(feuilleRender, { background: "#ffffff" }).then((canvas) => {
        const pdf = new jsPDF();
        const rendu = canvas.toDataURL("image/png", 1.0);
        pdf.addImage(rendu, "PNG", 0, 0, 210, 300);
        pdf.save("FicheTech_" + this.bandName + ".pdf");
        feuilleId.classList.add("shadow");
      });
    },
  },
};
</script>
<style  scoped>
#generator {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: none;
  height: 100%;
}
.buttonBox {
  position: fixed;
  top: 49%;
  left: 83%;
  padding: 20px;
  border: 2px solid black;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
button {
  background-color: black;
  color: white;
  border: none;
  text-align: center;
  text-decoration: none;
  padding: 15px 32px;
}
</style>

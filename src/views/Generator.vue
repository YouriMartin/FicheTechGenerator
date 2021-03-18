<template>
  <div id="generator">
    <ToolsBox />
    <Feuille v-model="bandname" />
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
  data: () => {
    return {
      bandname: "",
    };
  },
  components: {
    ToolsBox,
    Feuille,
  },
  methods: {
    createPdf() {
      window.scrollTo(0, 0);
      const feuilleId = document.getElementById("feuille");
      feuilleId.classList.remove("shadow");
      const feuilleRender = document.querySelector("#feuille");
      html2canvas(feuilleRender, { scale: 2 }).then((canvas) => {
        const pdf = new jsPDF();
        const rendu = canvas.toDataURL("image/png", 1.0);
        pdf.addImage(rendu, "PNG", 0, 0, 210, 300);
        pdf.save("FicheTech_" + this.bandname + ".pdf");
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
  transition: background-color 0.3s ease-in-out;
  transition-delay: 10ms;
}
.buttonBox:hover {
  background-color: black;
}
button {
  background-color: black;
  color: white;
  border: none;
  text-align: center;
  text-decoration: none;
  padding: 15px 32px;
  transition: background-color 0.3s ease-in-out;
  transition-delay: 10ms;
  letter-spacing: 2px;
  font-weight: bold;
}
.buttonBox:hover button {
  color: black;
  background-color: white;
}
</style>

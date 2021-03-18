<template>
  <div id="tableBox" v-if="showTable">
    <i class="fas fa-times" v-on:click="toggleTable"></i>
    <h4>Patch :</h4>
    <div id="tableForm">
      <div class="formElement">
        <label for="colone"> Nombre de colone : </label>
        <input type="number" name="colone" v-model="colNumber" />
        <h6 id="colone">Maximum 5 colones</h6>
      </div>
      <div class="formElement">
        <label for="ligne"> Nombre de ligne : </label>
        <input type="number" name="ligne" v-model="rowNumber" />
        <h6 id="ligne">Maximum 24 lignes</h6>
      </div>
      <button @click="createTab()" type="submit">Créer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableBox",
  props: ["showTable", "toggleTable"],
  data() {
    return {
      colNumber: null,
      rowNumber: null,
    };
  },
  methods: {
    createTab() {
      const tableParam = {
        colNumber: this.colNumber,
        rowNumber: this.rowNumber,
      };
      if (this.colNumber < 6) {
        document.getElementById("colone").classList.remove("alerte");
        if (this.rowNumber < 25) {
          this.$store
            .dispatch("createTab", tableParam)
            .then(this.toggleTable, this.$emit("create-table"));
        } else {
          document.getElementById("ligne").classList.add("alerte");
        }
      } else {
        document.getElementById("colone").classList.add("alerte");
      }
    },
  },
};
</script>

<style scoped>
#tableBox {
  height: 90%;
  width: 90%;
  border: 2px solid rgb(17, 60, 200, 0.5);
  box-shadow: rgba(17, 60, 200, 0.35) 0px 5px 15px;
  border-radius: 10px;
  text-align: center;
}
i {
  position: relative;
  font-size: 20px;
  left: 43%;
  top: 3%;
}
i:hover {
  text-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

  cursor: pointer;
  animation-name: ihover;
  animation-duration: 0.3s;
}
@keyframes ihover {
  30% {
    transform: rotate(0.1turn);
  }
  60% {
    transform: initial;
  }
  90% {
    transform: rotate(-0.1turn);
  }
}
#tableForm {
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.formElement {
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.alerte {
  color: red;
}
</style>
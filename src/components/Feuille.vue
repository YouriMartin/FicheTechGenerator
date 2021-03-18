<template>
  <div id="feuille" class="shadow">
    <div id="header">
      <h2>
        Fiche Technique
        <input
          type="text"
          v-bind:bandname="bandname"
          v-on:input="updateName($event.target.value)"
          placeholder="Nom du Groupe"
        />
      </h2>
      <h4>Contact:</h4>
      <div class="contactForm">
        <label for="nom">Nom : </label>
        <input class="nom" type="text" placeholder="Exemple Nom" />
        <label for="email">Email : </label>
        <input class="email" type="text" placeholder="exemple@gmail.com" />
        <label for="phone">Télephone : </label>
        <input class="phone" type="text" placeholder="0611223344" />
      </div>
      <div class="contactForm">
        <label for="nom">Nom : </label>
        <input class="nom" type="text" placeholder="Exemple Nom" />
        <label for="email">Email : </label>
        <input class="email" type="text" placeholder="exemple@gmail.com" />
        <label for="phone">Télephone : </label>
        <input class="phone" type="text" placeholder="0611223344" />
      </div>
      <div id="headfoot">
        <h4>
          SET:
          <input type="text" placeholder="1h30" />
        </h4>
        <h4>
          Balance:
          <input type="text" placeholder="30min" />
        </h4>
      </div>
    </div>
    <div id="patch">
      <h4>Patch :</h4>
      <i id="tableIcon" class="fas fa-table" v-on:click="toggleTable()"></i>
      <TableBox
        v-bind:showTable="showTable"
        v-bind:toggleTable="toggleTable"
        @create-table="createTable"
      />
    </div>
    <div id="info">
      <div class="infoCompenents">
        <h6>Materiel apporté par le Groupe :</h6>
        <textarea></textarea>
      </div>
      <div class="infoCompenents">
        <h6>Matériel à fournir :</h6>
        <textarea rows="8"></textarea>
      </div>
      <div class="infoCompenents">
        <h6>Autre :</h6>
        <textarea rows="8"></textarea>
      </div>
    </div>
    <div id="stage">
      <i v-for="item in itemDraggable" :key="item" :class="item"></i>
      <img id="trash" src="../assets/trash.png" alt="trash" />
    </div>
    <div id="webAdresse">
      <h6>www.FicheTechGenerator.com</h6>
    </div>
  </div>
</template>

<script>
import Draggable from "gsap/Draggable";
import TableBox from "./TableBox.vue";
export default {
  components: { TableBox },
  name: "Feuille",
  props: ["bandname"],
  data: () => {
    return {
      showTable: false,
    };
  },
  computed: {
    itemDraggable() {
      return this.$store.state.itemInStage;
    },
  },
  methods: {
    updateName: function (value) {
      this.$emit("input", value);
    },
    toggleTable: function () {
      this.showTable = !this.showTable;
      const tableIconDisplay = document.getElementById("tableIcon");
      if (this.showTable === true) {
        tableIconDisplay.style.display = "none";
      } else if (this.$store.state.tableParam !== null) {
        tableIconDisplay.style.display = "none";
      } else {
        tableIconDisplay.style.display = "block";
      }
    },
    createTable: function () {
      if (this.$store.state.tableParam !== null) {
        document.getElementById("tableIcon").style.display = "none";
        const row = this.$store.state.tableParam.rowNumber - 1;
        const col = this.$store.state.tableParam.colNumber - 1;
        const table = document.createElement("table");
        const patch = document.getElementById("patch");
        const tbdy = document.createElement("tbody");
        for (let i = 0; i <= row; i++) {
          const tr = document.createElement("tr");
          for (let j = 0; j <= col; j++) {
            const td = document.createElement("td");
            const input = document.createElement("input");
            input.size = "7";
            input.classList.add("inputPatch");
            td.appendChild(input);
            tr.appendChild(td);
          }
          tbdy.appendChild(tr);
        }
        table.appendChild(tbdy);
        patch.appendChild(table);
        document.getElementById("tableIcon").style.display = "none";
      }
    },
  },
  updated: () => {
    Draggable.create(".iconsIn", {
      type: "x,y",
      bounds: document.getElementById("stage"),
      onDragStart: function () {
        document.getElementById("trash").style.display = "block";
      },
      onRelease: function () {
        if (this.hitTest("#trash")) {
          this.target.remove();
          document.getElementById("trash").style.display = "none";
        } else {
          setTimeout(() => {
            document.getElementById("trash").style.display = "none";
          }, 200);
        }
      },
    });
  },
};
</script>

<style scoped>
#feuille {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 2fr;
  grid-template-areas:
    "header header header header"
    "patch patch sidebar sidebar"
    "stage stage stage stage"
    "footer footer footer footer";

  padding: 30px;
  margin: 30px 30px;
  background-color: white;
  width: 827px;
  height: 1170px;
}
.shadow {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
input {
  border: none;
}
#titre {
  left: 50%;
}
#header {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-area: header;
  height: 250px;
}
.contactForm {
  margin: 10px;
}
h2 {
  text-align: center;
  font-size: 25px;
}
h2 input {
  font-size: 25px;
}
#headfoot {
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
}

#patch {
  grid-area: patch;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

#tableIcon {
  position: relative;
  font-size: 50px;

  top: -100px;
  cursor: pointer;
  display: block;
}

#info {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-area: sidebar;
}
textarea {
  margin-top: -20px;
  width: 98%;
  height: 80%;
  resize: none;
  overflow: hidden;
}

#stage {
  grid-area: stage;
  font-size: 40px;
  border: 2px solid black;
  margin: 20px;
}

#trash {
  position: relative;
  top: -30px;
  left: 700px;
  display: none;
}
#webAdresse {
  text-align: center;
  grid-area: footer;
  height: 10px;
}
</style>
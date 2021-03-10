<template>
  <div id="feuille" class="shadow">
    <div id="header">
      <h2>
        Fiche Technique
        <input type="text" v-model="bandName" placeholder="Nom Groupe" />
      </h2>
      <h4>Contact:</h4>
      <div class="contactForm">
        <label for="nom">Nom</label>
        <input class="nom" type="text" placeholder="Jean Dupont" />
        <label for="email">Email :</label>
        <input class="email" type="text" placeholder="JeanDupont@gmail.com" />
        <label for="phone">Télephone :</label>
        <input class="phone" type="text" placeholder="0611223344" />
      </div>
      <div class="contactForm">
        <label for="nom">Nom</label>
        <input class="nom" type="text" placeholder="Jean Dupont" />
        <label for="email">Email :</label>
        <input class="email" type="text" placeholder="JeanDupont@gmail.com" />
        <label for="phone">Télephone :</label>
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
      <table>
        <tr>
          <td>&nbsp;</td>
          <td>PLACEMENT</td>
          <td>Effet</td>
          <td>INSERT</td>
          <td>DI</td>
        </tr>
        <tr>
          <td><input type="text" placeholder="1" size="1" /></td>
          <td><input type="text" placeholder="kick" size="1" /></td>
          <td><input type="text" placeholder="/" size="1" /></td>
          <td><input type="text" placeholder="comp" size="1" /></td>
          <td><input type="text" placeholder="/" size="1" /></td>
        </tr>
      </table>
    </div>
    <div id="info">
      <div class="infoCompenents">
        <h6>Materiel apporté par le Groupe :</h6>
        <textarea></textarea>
      </div>
      <div class="infoCompenents">
        <h6>Matériel à fournir :</h6>
        <textarea></textarea>
      </div>
      <div class="infoCompenents">
        <h6>Autre :</h6>
        <textarea></textarea>
      </div>
    </div>
    <div id="stage">
      <i v-for="item in itemDraggable" :key="item" :class="item"></i>
    </div>
  </div>
</template>

<script>
import Draggable from "gsap/Draggable";
export default {
  name: "Feuille",
  data: function () {
    return {
      bandName: null,
    };
  },
  computed: {
    itemDraggable() {
      return this.$store.state.itemInStage;
    },
  },
  updated: function () {
    Draggable.create(".iconsIn", {
      type: "x,y",
      bounds: document.getElementById("stage"),
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
}
table {
  width: 250px;
}
td {
  border: 1px solid black;
}

#info {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-area: sidebar;
}
textarea {
  margin-top: -20px;
  width: 98%;
  height: 50%;
  resize: none;
}

#stage {
  margin: 50px;
  grid-area: footer;
  font-size: 40px;
  border: 2px solid black;
}
#trash {
  font-size: 20px;
  position: relative;
  top: 10px;
  left: 680px;
  display: block;
}
</style>
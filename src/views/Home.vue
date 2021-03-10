<template>
  <div id="home">
    <h1>Fiche tech generator</h1>
    <div id="loginHome">
      <button v-on:click="toggleModal('in')" id="signInButton">
        S'inscrire
      </button>
      <button v-on:click="toggleModal('up')" id="signUpButton">
        Se connecter
      </button>
      <Login
        v-bind:revele="revele"
        v-bind:toggleModal="toggleModal"
        v-bind:signin="signin"
        v-bind:signup="signup"
        v-bind:titre="titre"
      />
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  data() {
    return {
      revele: false,
      signin: false,
      signup: false,
      titre: "",
    };
  },
  components: {
    Login,
  },
  methods: {
    toggleModal: function (signState) {
      this.revele = !this.revele;
      if (signState === "up") {
        this.signup = true;
        this.signin = false;
        this.titre = "CONNEXION";
      }
      if (signState === "in") {
        this.signin = true;
        this.signup = false;
        this.titre = "INSCRIPTION";
      }
    },
  },
};
</script>
<style  scoped>
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#loginHome {

  width: 350px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
#signInButton {
  background-color: #3379ec;
  color: white;
}
#signInButton:hover {
  cursor: pointer;
  animation-name: hoverfull;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
@keyframes hoverfull {
  5% {
    background-color: linear-gradient(10% #000158, 90% #3379ec);
  }
  25% {
    background-color: linear-gradient(30% #000158, 70% #3379ec);
  }
  50% {
    background-color: linear-gradient(50% #000158, 50% #3379ec);
  }
  75% {
    background-color: linear-gradient(75% #000158, 25% #3379ec);
  }
  100% {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    background-color: #0062ff;
  }
}

#signUpButton {
  background-color: white;
  color: #3379ec;
  border: 1px solid #3379ec;
}
#signUpButton:hover {
  background-color: #3379ec;
  color: white;
  animation-name: hoverfull;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
button {
  width: 100px;
  height: 40px;
  border-style: none;
  border-radius: 10px;
}
</style>

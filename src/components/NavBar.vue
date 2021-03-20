<template>
  <div id="nav">
    <router-link class="navLink" id="acceuil" to="/"
      ><img
        src="../assets/LogoNav.png"
        alt="Fiche Tech Gen"
      />Acceuil</router-link
    >
    <div id="navItems">
      <router-link class="navLink" to="/generator">Générateur</router-link>
      <router-link class="navLink" to="/myacount"
        >Mon Compte</router-link
      >
      <router-link class="navLink" to="/apropos">À propos de </router-link>
    </div>
    <div id="navLogin">
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
  name: "NavBar",
  data: () => {
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
#nav {
  background-color: #1e1e1e;
  width: 100%;
  height: 10vh;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 3px;
  box-shadow: rgba(33, 35, 38, 0.5) 0px 10px 15px -10px;
}
#navItems {
  width: 40%;
  display: inline-flex;
  justify-content: space-around;
}
.navLink {
  color: white;
  text-decoration: none;
  display: inline;
}
.navLink::after {
  content: "";
  display: block;
  margin-top: 2px;
  width: 99%;
  height: 1px;
  transform: scale(0);
  transition: transform 0.2s ease-in-out;
  background: white;
}
.navLink:hover::after {
  transform: scale(1);
}
img {
  height: 10vh;
  width: 10vh;
}
#acceuil {
  margin-left: 5%;
  font-size: 20px;
  display: flex;
  align-items: center;
}
#navLogin {
  display: flex;
  justify-content: space-between;
  width: 12%;
  margin-right: 5%;
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
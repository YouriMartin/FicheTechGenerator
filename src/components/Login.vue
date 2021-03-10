<template>
  <div id="login" v-if="revele">
    <div class="overlay" v-on:click="toggleModal"></div>
    <div class="modal">
      <i class="fas fa-times" v-on:click="toggleModal"></i>
      <h3>{{ titre }}</h3>
      <label for="email">Email :</label>
      <input type="email" name="email" />
      <label for="password">Mot de passe :</label>
      <input type="password" name="password" />
      <button id="signInButton" v-if="signin">S'inscrire</button>
      <button id="signUpButton" v-if="signup">Se connecter</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: ["revele", "toggleModal", "signin", "signup", "titre"],
};
</script>

<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
#login {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  border-radius: 10px;
  height: 300px;
  width: 500px;
  background: #f1f1f1;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: fixed;
  padding: 50px;
  top: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
i {
  position: absolute;
  font-size: 20px;
  left: 92%;
  top: 8%;
}
i:hover {
  text-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  font-size: 25px;
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
button {
  background-color: #3379ec;
  color: white;
  width: 100px;
  height: 40px;
  border-style: none;
  border-radius: 10px;
  margin-top: 10px;
}
button:hover {
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
input {
  height: 3vh;
  border-radius: 5px;
  border: 1px black solid;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
</style>
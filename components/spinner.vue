<template>
  <div id="cover">
    <div>
      <div id="loader" />
      <div>Loading...</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#cover {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  color: #fff;
}

#loader,
#loader:after {
  border-radius: 50%;
  width: 6em;
  height: 6em;
}
#loader {
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.7em solid rgba(255, 255, 255, 0.2);
  border-right: 0.7em solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.7em solid rgba(255, 255, 255, 0.2);
  border-left: 0.7em solid #fff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 599px) {
  #loader {
    margin-top: calc(50vh - 100px);
  }
}
</style>

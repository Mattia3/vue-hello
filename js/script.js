Vue.config.devtools = true;

const vueApp = new Vue ({
  el: "#titleH1",
  data:{
    title: "Benvenuto Vue",
    bindTitle: "Questo è il titolo",
    image: "01.jpg",
    imageBind: "title-img",
  }
})

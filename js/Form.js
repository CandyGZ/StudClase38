class Form {

  constructor() {
    this.input = createInput("Nombre");
    this.button = createButton('Jugar');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Juego de Carreras");
    this.title.position(100,10);

    this.input.position(100, 200);
    this.button.position(180, 250);
2
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hola " + player.name)
      this.greeting.position(180, 280);
    });

  }
}

window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.translate(135, 10);//Posición central del canvas...
    //Crear el código necesario para mostrar el logo de Altria
    //El cual consiste en una grilla de 5x5 con diferentes colores.
    //Hacer uso de la función randomColor()
    //Para crear un cuadrado puede hacer uso de la función
    //context.rect(x, y, ancho, alto);

    for (var i = 0; i <= 5; i++) {
      for (var j=0; j <= 5; j++ ){

        if(i != 5 && j!=5 ){
            context.beginPath();
            context.rect((i+1)*50, (j+1)*50, 50, 50);
            context.fillStyle = randomColor();
            context.fill();
        }
      }
    };

    context.fillStyle = "#323465";
    context.font = "120px times new roman";
    context.fillText("Altria", 40, 420);


    function randomColor()
    {
        // from http://www.paulirish.com/2009/random-hex-color-code-snippets/
        return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
       (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
    };
};

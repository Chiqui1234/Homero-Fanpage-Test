// Javascript test
class Pelicula
{
    constructor(title, genre, year)
    {
        this.title = title;
        this.genre = genre;
        this.year = year;
    }
    play()
    {
        return "play";
    }
}

class Series extends Pelicula
{
    constructor(chapter)
    {
        super(); // clave para extender a Película
        this.chapter = chapter; // capitulo
    }
}
//
var peli = new Pelicula();
peli.title = "Piratas del Caribe: En busca del perla negra";
peli.genre = "Ficción";
peli.year = 2008;
/*  
    También podría ser:
    var test = new Pelicula("Piratas del Caribe: En busca del perla negra", "Ficción", 2008)
*/
var serie = new Series();
serie.title = "Friends";
serie.genre = "Comedia";
serie.year = 2000;
serie.chapter = 1;

console.info(peli);
console.info(serie);

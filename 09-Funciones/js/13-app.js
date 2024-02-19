const reproductor = { 
    cancion: '',
    reproducir: id=>`Reproduciendo canción con el ID ${id}... `,
    pausar: ()=>`Pausando...`,
    borrar: id=>`Borrando canción ${id}`,
    crearPlaylist: name=>`Creando la playlist ${name}`,
    reproducirPlaylist: name=>`Reproduciendo la playlita ${name}`,
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'La cumbia de los trapos';
reproductor.obtenerCancion;

console.log(reproductor.reproducir(30));
console.log(reproductor.reproducir(20));
console.log(reproductor.reproducir(22));
console.log(reproductor.pausar());
console.log(reproductor.borrar(50));
console.log(reproductor.crearPlaylist('Ska, punk, oi!'));
console.log(reproductor.reproducirPlaylist('Ska'));
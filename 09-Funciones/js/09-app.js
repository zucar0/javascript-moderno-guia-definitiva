const reproductor = { 
    reproducir: function(id){
        console.log(`Reproduciendo canción con el ID ${id}... `)
    },
    pausar: function(){
        console.log(`Pausando...`)
    },
    borrar: function(id){
        console.log(`Borrando canción ${id}`)
    },
    crearPlaylist: function(name){
        console.log(`Creando la playlist ${name}`)
    },
    reproducirPlaylist: function(name){
        console.log(`Reproduciendo la playlita ${name}`)
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.reproducir(22);
reproductor.pausar();
reproductor.borrar(50);
reproductor.crearPlaylist('Ska, punk, oi!');
reproductor.reproducirPlaylist('Ska');


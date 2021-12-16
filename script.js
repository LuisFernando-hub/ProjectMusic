
let musicas = [
    {titulo: 'Eletronic', 
    Artist: 'Nico Staf', 
    src:'musica/Snake on the Beach - Nico Staf.mp3',
    img:'imagens/eletronica.jpg'},
    {titulo: 'POP', 
    Artist: 'Nico Staf', 
    src:'musica/Fast and Run - Nico Staf.mp3',
    img:'imagens/pop.jpg'},    
    {titulo: 'Samba', 
    Artist: 'Ella Vater', 
    src:'musica/Ella Vater - The Mini Vandals.mp3',
    img:'imagens/samba.jpg'},
];

let musica = document.querySelector('audio');

let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);


// Eventos
document.querySelector('.botao-play').addEventListener('click', playMusic);

document.querySelector('.botao-pause').addEventListener('click', stopMusic);

musica.addEventListener('timeupdate',atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);

});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

// Funções

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].Artist;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function playMusic() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function stopMusic(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0'+campoSegundos;
    }

    return campoMinutos + ':' + campoSegundos;
}

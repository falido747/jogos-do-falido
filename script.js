const ADMIN='Estrela0296';
const GAMEPASS='2504';

function loadGames(){
 const games=JSON.parse(localStorage.getItem('games')||'[]');
 const area=document.getElementById('games');
 area.innerHTML='';
 games.forEach((g,i)=>{
   area.innerHTML+=`<div class="card">
   <img src="${g.image}">
   <h3>${g.name}</h3>
   <button onclick="openGame('${g.link}')">Acessar Jogo</button>
   </div>`;
 });
}

function openGame(link){
 const p=prompt('Digite a senha:');
 if(p===GAMEPASS) window.open(link,'_blank');
 else alert('Senha incorreta');
}

function loginAdmin(){
 const p=prompt('Senha ADM:');
 if(p!==ADMIN){alert('Senha incorreta');return;}
 const name=prompt('Nome do jogo:');
 if(!name) return;
 const image=prompt('URL da capa:');
 const link=prompt('Link oficial:');
 let games=JSON.parse(localStorage.getItem('games')||'[]');
 games.push({name,image,link});
 localStorage.setItem('games',JSON.stringify(games));
 loadGames();
 alert('Jogo adicionado!');
}
loadGames();
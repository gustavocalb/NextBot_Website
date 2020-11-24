import React from 'react'
// import Twemoji from 'react-twemoji';

import './main.css';
import './animations.css'


import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Main  title="Divirta-se com amigos" position="left" img="https://cdn.discordapp.com/attachments/778297027775299594/778376128922386482/unknown.png" desc="Com o Next você vai poder jogar um incrível jogo de dungeon onde seu objetivo é passar as 100 fases!" />
      <Main  title="Personalize seu jogo" position="right" img="https://cdn.discordapp.com/attachments/778297027775299594/778376202296623124/unknown.png" desc="Com o Next você vai poder personalizar suas partidas do seu jeito! Compre cores e personagens novos para seus jogos!" />
      <Main  title="Jogue como preferir" position="left" img="https://cdn.discordapp.com/attachments/761391602492112956/779858550943121438/unknown.png" desc="Se você joga em aparelhos mobile não fique preocupado! Você pode configurar seus controles para seus aparelhos" />
      <Main  title="Total controle" position="right" img="https://cdn.discordapp.com/attachments/761391602492112956/779858550943121438/unknown.png" desc="Você também vai poder acessar o painel do Next, tendo controle total sobre ele para administrar melhor seu servidor!" />
      <Footer />
    </div>
  );
}

export default App;

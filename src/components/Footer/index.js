import React from 'react'
import './main.css'


function Footer() {
   return (
      <>
      <footer>
         <div className="container-footer">
            <div className="container discord">
            {/* <iframe className="discord" title="discord" src="https://discordapp.com/widget?id=738126640520888432&theme=dark" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> */}
            </div>
            <div className="bnt">
               <ul>
                  <li>
                  <a  href="https://discord.com/oauth2/authorize?client_id=768301219407069185&scope=bot">Adicionar</a>
                  <a  href="https://discord.gg/PGwPeNA">Suporte</a>
                  </li>
               </ul>
            </div>
            <div className="description-footer">
               <h2>Next © Todos direitos reservados - 2020</h2>
            </div>
         </div>
      </footer>
      </>
   )
}

export default Footer
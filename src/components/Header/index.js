import React from 'react'
import './main.css'

function Header() {
    return (
    <>
        <div className="logo">
        <h2>Next Bot</h2>
        </div>
      <header>
            <div className="simple-description">
                <h2>Um bot focado em puzzles e desafios extremos</h2>
            </div>
            <div className="buttons">
                <ul>
                    <li><a className="bnt1" style={{ marginRight: "5px" }} href="https://discord.com/oauth2/authorize?client_id=768301219407069185&scope=bot">Adicionar</a></li>
                    <li><a className="bnt2" href="https://discord.gg/PGwPeNA">Suporte</a></li>
                </ul>
            </div>
    </header>
    </>
    )
}

export default Header
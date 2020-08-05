import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import "./styles.css"

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://images.unsplash.com/photo-1584277261846-c6a1672ed979?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Imagem teacher"/>
                <div>
                    <strong>Fulano de Tal</strong>
                    <span>Química</span>
                </div>
            </header>
            
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br/><br/>
                Dolorum ipsam unde optio quam eveniet minima, odit, ratione aliquid provident rem quo similique dolores, magni officiis suscipit deleniti. Totam, explicabo aspernatur!
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button type= "button"> 
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>

        </article>

    );
}

export default TeacherItem;
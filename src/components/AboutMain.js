import React from "react"

export default function AboutMain() {
    return (
        <main role="main" class="container">
            <div class="starter-template">
            <h1>
                Sobre la DinoAPI
            </h1><br />
            <h2>
                ¿Qué es esta API?
            </h2>
            <p>
                Usando esta API se puede obtener información de diferentes especies de dinosaurios: su nombre, la foto del dinosaurio, su hábitat y el periodo en el que vivió.
            </p>
            <h2>
                ¿Dónde está alojada la DinoAPI?
            </h2>
            <p>
                Si quieres saber más sobre la DinoAPI, puedes acceder directamente a ella desde <a href="https://dinoapi.onrender.com/" target="_blank" rel="noreferrer">este enlace</a> </p>
            <h2>
                ¿Como se obtuvo la información de los dinosaurios?
            </h2>
            <p>
                La información encontrada en esta API fue obtenida de la web <a href="https://www.thoughtco.com/dinosaurs-a-to-z-1093748" target="_blank" rel="noreferrer">Thoughtco</a> </p>
            </div>
        </main>
    )
}
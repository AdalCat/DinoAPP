import React from "react"

export default function AboutMain() {
    return (
        <main role="main" className="container">
            <div className="starter-template">
            <h1>
                Sobre la DinoAPI
            </h1>
            <h2>
                Qué es esta API
            </h2>
            <p>
                Usando esta API se puede obtener información de diferentes especies de dinosaurios: su nombre, la foto del dinosaurio, su hábitat y el periodo en el que vivió.
            </p>
            <h2>
                Como se obtuvo la información
            </h2>
            <p>
                La información encontrada en esta API fue obtenida de<a href="https://www.thoughtco.com/dinosaurs-a-to-z-1093748"> Thoughtco</a> </p>
            </div>
        </main>
    )
}
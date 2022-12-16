import React from "react"

export default function AboutMain() {
    return (
        <main role="main" class="container">
            <div class="starter-template">
                <h1 className="text-center">
                    App Dino
                </h1><br />
                <h2 className="mb-3">
                    Estructura general de la aplicación
                </h2>
                <img className="img-app" alt="Estructura general de la aplicación" src="https://i.ibb.co/jfwM6zf/App-Dino.png"/>
                <h2 className="mt-4">
                    ¿Como funciona?
                </h2>
                <p>
                    A través de esta App se puede consumir/obtener información de la Dino API, la API contiene diferentes especies de dinosaurios: su nombre, la foto del dinosaurio, su hábitat y el periodo en el que vivió.
                </p>
                <h2>
                    ¿Dónde está alojada la DinoAPI?
                </h2>
                <p>
                    Si quieres saber más sobre la DinoAPI, puedes acceder directamente a ella desde 
                        <a className="text-decoration-none ms-2" href="https://dinoapi.onrender.com/" target="_blank" rel="noreferrer">este enlace</a> 
                    </p>
                <h2>
                    ¿Como se obtuvo la información de los dinosaurios?
                </h2>
                <p>
                    La información encontrada en esta API fue obtenida de la web 
                        <a className="text-decoration-none ms-2" href="https://www.thoughtco.com/dinosaurs-a-to-z-1093748" target="_blank" rel="noreferrer">Thoughtco</a> 
                </p>
            </div>
        </main>
    )
}
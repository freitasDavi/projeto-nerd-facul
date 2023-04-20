import Image from "next/image";



export default function Perfil () {
    return (
        <main className=" bg-gray-900 h-screen flex justify-center content-center pt-8">
            <div className="w-3/4">
                <h1 className="text-6xl text-white mb-4">Meu perfil</h1>
                <div className="bg-gray-700 min-h-[400px] rounded-lg p-4">
                    <div id="info" className="w-full bg-gray-600 min-h-[300px] rounded-lg mb-4 flex p-4 pt-8">
                        <img 
                            className="rounded-full w-40 h-40" 
                            src="https://easydrawingguides.com/wp-content/uploads/2017/01/How-to-draw-batmans-face-19.png" 
                            alt="profile" 
                        />
                        <div>
                            <h2 className="text-5xl text-white mb-0">Oi, eu sou o Batman</h2>
                            <h4 className="font-sans text-gray-300 mb-2">Colecionador ha 5 anos</h4>
                            <p className="font-sans text-white ">
                              Minha grande bio 
                              lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, enim. Quod tempore impedit nulla illo vero ut sed. Ipsum minima molestiae eligendi impedit dolor harum quibusdam odio tempora, qui id?  
                              lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore sequi, omnis ullam saepe officiis quaerat asperiores recusandae reiciendis velit. Et quo nam sunt laborum error dolores ab porro explicabo repudiandae.
                            </p>
                        </div>
                    </div>
                    <div id="catalog">
                        <div className="bg-white w-72 flex justify-center rounded-xl">
                            <img 
                                className="w-60 h-60"
                                src="https://estripulia.com.br/wp-content/uploads/2022/01/Boneco-Marvel-Homem-de-Ferro-Legends-Series-Hasbro-F0355-3.jpg" 
                                alt="Bonequinho"
                            />
                            <h3></h3>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
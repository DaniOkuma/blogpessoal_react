
function Home() {
   
    return (
        <>
            <div id="container" className="
            bg-pink-200 
            flex 
            justify-center">
                <div id="subcontainer" className="
                container 
                grid 
                grid-cols-2 
                text-white">
                    <div id="texto" className="
                    flex 
                    flex-col 
                    gap-4 
                    items-center 
                    justify-center 
                    py-4">

                        <h2 className="
                            text-5xl
                            font-bold
                        ">Seja Bem Vindo!</h2>
                        <p className="
                        text-xl"
                        >Expresse aqui os seus pensamentos e opiniões</p>

                        <div className="
                        flex 
                        justify-around
                        gap-4">
                            <div className="
                        rounded
                        text-white
                        border-white 
                        border-solid 
                        border-2 
                        px-4 
                        py-2">
                                Nova Postagem
                            </div>
                        </div>
                    </div>
                    <div id="imagem" className="
                    flex 
                    justify-center">
                        <img src="https://img1.picmix.com/output/stamp/normal/1/5/8/5/2445851_880d1.png"
                            alt="imagem da página home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
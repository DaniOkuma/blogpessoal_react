import ListaPostagens from '../../components/postagens/listapostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalpostagem/ModalPostagem';


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

            <div className="flex justify-around gap-4">
              <ModalPostagem />
            
            </div>
          </div>

          <div id="imagem" style={{
            width: "60vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <img src="https://i.pinimg.com/originals/54/5c/a0/545ca0e8baf428e63898bda4aab324bb.jpg"
              alt="imagem da página home"
              width="800px" />

          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home
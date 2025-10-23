//Destruct - vai acessar os dados atraves de outro componente
export const MenuItem = ({titulo,preco,img,descricao}) => {
  return (
    <article>
        <img src={img} alt={titulo}/>
        <div>
            <header>
                <h1>{titulo}</h1>
                {/*toFixed pega duas casas depois da virgula*/}
                <p>R$ {preco.toFixed(2)}</p>
            </header>
        </div>
    </article>
  )
}

export default MenuItem
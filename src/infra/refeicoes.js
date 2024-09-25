export async function listarCategorias() {
    let retorno = [];
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    await fetch(url)
        .then((resposta) => resposta.json())
        .then((categorias) => {
            retorno = categorias.categories;
        })
        .catch((erro) => retorno = erro);
    return retorno;
}
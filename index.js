

async function fetchData(){
    try {
        const imgElement = document.getElementById('pokemonSprite')
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error("Could not fetch resource")
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;

        imgElement.src = pokemonSprite
        imgElement.style.display = 'block'
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
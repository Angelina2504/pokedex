export default function NavBar ({pokemonList, pokemonIndex, handleClickSuivant, handleclickPrécédent}) {
    

    return (
       
    
    <>
            {
         pokemonIndex > 0 ? <button onClick={handleclickPrécédent}>Précédent</button> : undefined
         }  

        {
          pokemonIndex <pokemonList.length -1 ? <button onClick={handleClickSuivant}>Suivant</button> : undefined } 
    </>  
    );
}
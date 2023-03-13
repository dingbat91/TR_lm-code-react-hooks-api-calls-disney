import { useContext } from "react";
import { FavouriteContext } from "../App";
import { DisneyCharacter } from "../disney_character";

interface CharacterProps {
	character: DisneyCharacter;
	updateFavourites: (favourites: Array<number>) => void;
}

const Character: React.FC<CharacterProps> = ({
	character,
	updateFavourites,
}) => {
	const characterFavourites = useContext(FavouriteContext);
	function toggleFavouritesForCharacter(characterID: number) {
		if (!characterFavourites.includes(characterID)) {
			updateFavourites([...characterFavourites, characterID]);
		} else {
			const updatedFavourites = characterFavourites.filter(
				(id) => id !== characterID
			);
			updateFavourites(updatedFavourites);
		}
	}

	return (
		<article className='card'>
			<h2>{character.name}</h2>

			<button
				className='card__button '
				onClick={() => toggleFavouritesForCharacter(character._id)}
			>
				{!characterFavourites.includes(character._id)
					? "Add to favourites"
					: "Favourited"}
			</button>

			<img
				className='card__img'
				src={character.imageUrl}
				alt={character.name}
			/>
		</article>
	);
};

export default Character;

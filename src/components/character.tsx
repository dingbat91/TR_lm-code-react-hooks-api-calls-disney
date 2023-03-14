import { useContext } from "react";
import { FavouriteContext } from "../App";
import { DisneyCharacter } from "../disney_character";

interface CharacterProps {
	character: DisneyCharacter;
	updateFavourites: (favourites: Array<DisneyCharacter>) => void;
}

const Character: React.FC<CharacterProps> = ({
	character,
	updateFavourites,
}) => {
	const characterFavourites = useContext(FavouriteContext);

	const toggleFavouritesForCharacter = (char: DisneyCharacter) => {
		if (!characterFavourites.includes(char)) {
			const newFaves = [...characterFavourites, char];
			newFaves.sort((a, b) => a.name.localeCompare(b.name));
			updateFavourites(newFaves);
		} else {
			const newFaves = characterFavourites.filter((c) => c != char);
			updateFavourites(newFaves);
		}
	};

	return (
		<article className='card'>
			<h2>{character.name}</h2>

			<button
				className='card__button '
				onClick={() => toggleFavouritesForCharacter(character)}
			>
				{characterFavourites.includes(character)
					? "Remove from favourite"
					: "Add to favourite"}
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

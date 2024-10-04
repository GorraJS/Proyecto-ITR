import { useEffect, useState } from "react";
import axios from "axios";
function Portada() {

	const iconicMovies = [
		"Psycho (1960)",
		"Spartacus (1960)",
		"The Apartment (1960)",
		"West Side Story (1961)",
		"Lawrence of Arabia (1962)",
		"To Kill a Mockingbird (1962)",
		"Dr. Strangelove (1964)",
		"The Good, the Bad and the Ugly (1966)",
		"2001: A Space Odyssey (1968)",
		"Rosemary's Baby (1968)",
		"The Godfather (1972)",
		"A Clockwork Orange (1971)",
		"The Exorcist (1973)",
		"Jaws (1975)",
		"Star Wars: Episode IV - A New Hope (1977)",
		"Alien (1979)",
		"Blade Runner (1982)",
		"Back to the Future (1985)",
		"The Shining (1980)",
		"E.T. the Extra-Terrestrial (1982)",
		"Die Hard (1988)",
		"The Terminator (1984)",
		"Pulp Fiction (1994)",
		"The Matrix (1999)",
		"Fight Club (1999)",
		"The Silence of the Lambs (1991)",
		"Goodfellas (1990)",
		"The Dark Knight (2008)",
		"Gladiator (2000)",
		"The Lord of the Rings: The Return of the King (2003)",
		"Inception (2010)",
		"Mad Max: Fury Road (2015)",
		"Parasite (2019)",
		"The Avengers (2012)",
		"Interstellar (2014)",
		"Dune (2021)",
		"Spider-Man: No Way Home (2021)",
		"Everything Everywhere All at Once (2022)",
		"Oppenheimer (2023)",
		"8½ (1963)",
		"The Sound of Music (1965)",
		"Bonnie and Clyde (1967)",
		"The Graduate (1967)",
		"Planet of the Apes (1968)",
		"Midnight Cowboy (1969)",
		"Butch Cassidy and the Sundance Kid (1969)",
		"The Wild Bunch (1969)",
		"One Flew Over the Cuckoo's Nest (1975)",
		"Chinatown (1974)",
		"Rocky (1976)",
		"Taxi Driver (1976)",
		"Apocalypse Now (1979)",
		"The French Connection (1971)",
		"Aguirre, the Wrath of God (1972)",
		"The Texas Chain Saw Massacre (1974)",
		"Saturday Night Fever (1977)",
		"Close Encounters of the Third Kind (1977)",
		"Raging Bull (1980)",
		"Raiders of the Lost Ark (1981)",
		"The Thing (1982)",
		"Scarface (1983)",
		"Ghostbusters (1984)",
		"Beverly Hills Cop (1984)",
		"Platoon (1986)",
		"Top Gun (1986)",
		"The Princess Bride (1987)",
		"Lethal Weapon (1987)",
		"Batman (1989)",
		"Dead Poets Society (1989)",
		"When Harry Met Sally (1989)",
		"Schindler's List (1993)",
		"Jurassic Park (1993)",
		"Titanic (1997)",
		"Saving Private Ryan (1998)",
		"The Big Lebowski (1998)",
		"The Sixth Sense (1999)",
		"American Beauty (1999)",
		"Braveheart (1995)",
		"Se7en (1995)",
		"Forrest Gump (1994)",
		"Trainspotting (1996)",
		"The Truman Show (1998)",
		"Memento (2000)",
		"Requiem for a Dream (2000)",
		"The Lord of the Rings: The Fellowship of the Ring (2001)",
		"Kill Bill: Vol. 1 (2003)",
		"Eternal Sunshine of the Spotless Mind (2004)",
		"Sin City (2005)",
		"The Departed (2006)",
		"No Country for Old Men (2007)",
		"There Will Be Blood (2007)",
		"The Social Network (2010)",
		"Black Swan (2010)",
		"Drive (2011)",
		"The Wolf of Wall Street (2013)",
		"Frozen (2013)",
		"Whiplash (2014)",
		"Birdman (2014)",
		"The Grand Budapest Hotel (2014)",
		"John Wick (2014)",
		"Room (2015)",
		"La La Land (2016)",
		"Moonlight (2016)",
		"Get Out (2017)",
		"Coco (2017)",
		"Blade Runner 2049 (2017)",
		"A Star is Born (2018)",
		"Roma (2018)",
		"Spider-Man: Into the Spider-Verse (2018)",
		"The Batman (2022)",
		"Tenet (2020)",
		"The Green Knight (2021)",
		"The Northman (2022)",
		"Avatar: The Way of Water (2022)",
		"Barbie (2023)",
		"No Time to Die (2021)",
		"The Suicide Squad (2021)",
		"La Dolce Vita (1960)",
		"Yojimbo (1961)",
		"Persona (1966)",
		"The Battle of Algiers (1966)",
		"The Conformist (1970)",
		"Solaris (1972)",
		"The Discreet Charm of the Bourgeoisie (1972)",
		"Amarcord (1973)",
		"Stalker (1979)",
		"Cinema Paradiso (1988)",
		"Ran (1985)",
		"Life Is Beautiful (1997)",
		"Oldboy (2003)",
		"City of God (2002)",
		"Pan's Labyrinth (2006)",
		"The Lives of Others (2006)",
		"The Secret in Their Eyes (2009)",
		"Fantasia (1940)",
		"Sleeping Beauty (1959)",
		"The Jungle Book (1967)",
		"Akira (1988)",
		"My Neighbor Totoro (1988)",
		"Grave of the Fireflies (1988)",
		"Beauty and the Beast (1991)",
		"Aladdin (1992)",
		"The Lion King (1994)",
		"Spirited Away (2001)",
		"Finding Nemo (2003)",
		"WALL-E (2008)",
		"Up (2009)",
		"Toy Story 3 (2010)",
		"Zootopia (2016)",
		"Moana (2016)",
		"Night of the Living Dead (1968)",
		"The Wicker Man (1973)",
		"Halloween (1978)",
		"A Nightmare on Elm Street (1984)",
		"The Fly (1986)",
		"Hellraiser (1987)",
		"Scream (1996)",
		"The Ring (2002)",
		"The Babadook (2014)",
		"Hereditary (2018)",
		"Midsommar (2019)",
		"The Untouchables (1987)",
		"The Fugitive (1993)",
		"The Insider (1999)",
		"American History X (1998)",
		"Gladiator (2000)",
		"Cast Away (2000)",
		"The Pianist (2002)",
		"The Bourne Identity (2002)",
		"Gangs of New York (2002)",
		"Collateral (2004)",
		"Children of Men (2006)",
		"Slumdog Millionaire (2008)",
		"District 9 (2009)",
		"Inglourious Basterds (2009)",
		"The Fighter (2010)",
		"12 Years a Slave (2013)",
		"Dallas Buyers Club (2013)",
		"The Revenant (2015)",
		"Hacksaw Ridge (2016)",
		"Dunkirk (2017)",
		"Once Upon a Time in Hollywood (2019)"];


	const [movies, setMovies] = useState([]);
	const [randomMovie, setRandomMovie] = useState("");


	const RandomMovie = () => {
		let posicion = Math.floor(Math.random(iconicMovies.length))
		setRandomMovie(iconicMovies[posicion])
	}

	useEffect(() => {
		const fetchData = async () => {
			const options = {
				method: 'GET',
				url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
				params: { q: 'dr' },
				headers: {
					'x-rapidapi-key': 'b862bfc460msh1c42caa05af5803p16bad7jsnbcd106b306ef',
					'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
				}
			};

			try {
				const response = await axios.request(options);
				console.log(response.data);
				setMovies(response.data.d)
				console.log(randomMovie)
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, []);


	return (
		<>
			<h1>Pelicula:</h1>

			<main>
				{movies.map((movie) => (
					<div key={movie.id}>
						<h2>{movie.l}</h2>
						{movie.i && movie.i.imageUrl ? (
							<img
								src={movie.i.imageUrl}
								alt={movie.l}
								width="200px"
							/>
						) : (
							<p>no papi no hay foto</p>
						)}
					</div>
				))}
			</main>
			<button onClick={RandomMovie}>Generar Pelicula</button>
		</>
	);
}
export default Portada;

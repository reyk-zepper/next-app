import useSWR from "swr";

export const useRickAndMortyAPI = () => {
  const { data, error } = useSWR("https://rickandmortyapi.com/api/character");
  console.log(data);

  return {
    characters: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default function CharacterList() {
  const { characters, isLoading, isError } = useRickAndMortyAPI();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data from API.</p>;
  }

  return (
    <ul>
      {characters.results.map((character) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  );
}

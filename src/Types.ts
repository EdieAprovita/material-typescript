export interface ApiProps {
  data: Array<CharactersProps | EpisodesProps | QuotesProps | DeathsProps>;
}

export interface CharactersProps {
  id: number;
  name: string;
  birthday: string;
  occupation: Array<string>[];
  img: string;
  status: string;
  appearance: Array<number>[];
  portrayed: string;
  category: string;
}

export interface EpisodesProps {
  id: number;
  title: string;
  season: number;
  episode: number;
  air_date: string;
  characters: Array<string>[];
  series: string;
}

export interface QuotesProps {
  id: number;
  quote: string;
  author: string;
  series: string;
}

export interface DeathsProps {
  id: number;
  death: string;
  cause: string;
  responsible: string;
  last_words: string;
  season: number;
  episode: number;
  number_of_deaths: number;
}

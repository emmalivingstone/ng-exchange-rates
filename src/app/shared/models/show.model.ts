export interface Show {
  name: string;
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  original_name: string;
}

export interface ShowResponse {
  page: number;
  results: Show[];
  total_results: number;
  total_pages: number;
}

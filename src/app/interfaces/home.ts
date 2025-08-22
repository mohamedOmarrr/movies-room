export interface Movies {
  id?: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  overview?: string;
  runtime?: number;
}

export interface TV {
  id?: number;
  name: string;
  first_air_date?: string;
  vote_average: number;
  poster_path: string;
  overview?: string;
  seseons?: number;
}


export interface Actor {
  id: number;
  name: string;             
  profile_path: string;           
  known_for_department: string;
  popularity: number;             
}
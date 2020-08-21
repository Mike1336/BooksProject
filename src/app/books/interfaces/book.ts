export interface IBook {

  id: number;
  description: string;
  author_id: number;
  title: string;
  price: number;
  genres:
      {
        id: number;
        name: string;
      }[];
  previews: [];
  image: string;
  writing_date: string;
  release_date: string;
  author: {
    id: number;
    first_name: string;
    last_name: string;
  };

}

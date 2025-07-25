export interface Category {
  id: string;
  type: string;
  attributes: {
    title: string;
    description: string;
    posterImage: {
      tiny: string;
      large: string;
    };
  };
}

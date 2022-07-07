interface Sizes {
  type: string;
  ratio: number;
}

export enum Size {
  'lg' = 1.5,
  'md' = 1.2,
  'sm' = 1,
}

export interface Menu {
  id: number;

  menu_name: string;
  menu_description: string;
  menu_size: Sizes[];
  cost: number;
  imageUrl: string;
}

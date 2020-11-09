export interface Community {
  title: string;
  url: string;
  members: number;
  image: string;
}

export interface HomeProps {
  communities: Community[];
}

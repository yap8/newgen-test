export interface Range {
  [index: number]: number | null;
}

export interface Course {
  name: string;
  prices: Range;
}

export interface IDTOBase<T> {
  Id: T;
}

export interface IPropertyDTO extends IDTOBase<number> {
  bannerImage: string;
  brief: string;
  detail: string;
  extra: string;
  facilities: string;
  images: string[];
  overView: string;
  pricePerDay: number;
  publicSubTitle: string;
  publicTitle: string;
  showHomePage: boolean;
  showSlider: string;
  tableOverview: number[];
}
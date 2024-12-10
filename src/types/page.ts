export interface PageParams {
  id: string;
}

export interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export interface PageProps<T = PageParams> {
  params: T;
  searchParams: SearchParams;
} 
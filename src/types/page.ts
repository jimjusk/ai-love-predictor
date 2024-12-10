export interface PageParams {
  id: string;
}

export interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export interface PageProps {
  params: Promise<PageParams>;
  searchParams: SearchParams;
}

export interface ClientPageProps {
  params: PageParams;
  searchParams: SearchParams;
} 
export type ICaseStudyForm = {
  title: string;
  abstract: string;
  cardPhoto: File | null | string;
  content: string;
  slug: string;
} & IFirestoreData;

export interface IFirestoreData {
  created?: number;
  id?: string;
}

export interface INavMap {
  name: string;
  path: string;
  description?: string;
  subPath?: INavMap[];
}

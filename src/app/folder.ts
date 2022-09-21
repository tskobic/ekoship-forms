import { File } from './file';

export interface Folder {
  name: string;
  folders: Folder[];
  files: File[];
}

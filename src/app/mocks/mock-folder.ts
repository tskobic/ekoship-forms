import { Folder } from '../models/folder';

export const folder: Folder = {
  name: 'root-folder',
  files: [{ name: 'file001' }, { name: 'file002' }],
  folders: [
    {
      name: 'folder001',
      files: [{ name: 'file003' }, { name: 'file004' }],
      folders: [
        {
          name: 'folder003',
          files: [{ name: 'file006' }],
          folders: [],
        },
      ],
    },
    {
      name: 'folder002',
      files: [
        { name: 'file005' },
        { name: 'file007' },
        { name: 'file008' },
        { name: 'file009' },
        { name: 'file010' },
        { name: 'file011' },
      ],
      folders: [],
    },
  ],
};

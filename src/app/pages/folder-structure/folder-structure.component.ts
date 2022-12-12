import { Component, OnInit } from '@angular/core';
import { Folder } from '../../models/folder';
import { folder } from '../../mocks/mock-folder';

@Component({
  templateUrl: './folder-structure.component.html',
  styleUrls: ['./folder-structure.component.css'],
})
export class FolderStructureComponent implements OnInit {
  rootFolder: Folder = folder;

  constructor() {}

  ngOnInit(): void {}

  changeVisibility(folder: HTMLDivElement) {
    if (folder.classList.contains('hidden')) {
      folder.classList.remove('hidden');
    } else {
      folder.classList.add('hidden');
    }
  }
}

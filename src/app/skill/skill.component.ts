import { Component, OnInit } from '@angular/core';
import {NgGrid, NgGridItem, NgGridItemConfig, NgGridConfig} from 'angular2-grid';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  private boxes: Array<any> = [];
  private rgb: string = '#efefef';
  private curNum;

  private gridConfig: NgGridConfig = <NgGridConfig>{
    'margins': [5],
    'draggable': true,
    'resizable': true,
    'max_cols': 0,
    'max_rows': 0,
    'visible_cols': 0,
    'visible_rows': 0,
    'min_cols': 1,
    'min_rows': 1,
    'col_width': 2,
    'row_height': 2,
    'cascade': 'up',
    'min_width': 60,
    'min_height': 50,
    'fix_to_grid': false,
    'auto_style': true,
    'auto_resize': false,
    'maintain_ratio': false,
    'prefer_new': false,
    'zoom_on_drag': false,
    'limit_to_screen': true
  };
  private itemPositions: Array<any> = [];

  constructor() {
    const dashconf = this._generateDefaultDashConfig();
    for (var i = 0; i < dashconf.length; i++) {
      const conf = dashconf[i];
      conf.payload = 1 + i;
      this.boxes[i] = { id: i + 1, config: conf };
      console.log(this.boxes[i].config);
    }
    this.curNum = dashconf.length + 1;
  }

  ngOnInit() {
  }

  private _generateDefaultDashConfig(): NgGridItemConfig[] {
  		return [
      { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 25, 'sizey': 25 },
      { 'dragHandle': '.handle', 'col': 36, 'row': 1, 'sizex': 25, 'sizey': 25 },
      { 'dragHandle': '.handle', 'col': 1, 'row': 2, 'sizex': 25, 'sizey': 25 },
      { 'dragHandle': '.handle', 'col': 36, 'row': 2, 'sizex': 25, 'sizey': 25 },
      { 'dragHandle': '.handle', 'col': 1, 'row': 3, 'sizex': 25, 'sizey': 25 },
      { 'dragHandle': '.handle', 'col': 36, 'row': 3, 'sizex': 25, 'sizey': 25 }
    ];
  }
}

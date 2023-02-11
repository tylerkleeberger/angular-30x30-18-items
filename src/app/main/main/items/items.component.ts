import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit{
  currentId = null;
  currentItem =null;

  items = [
    { id: '1', title: 'Item One' },
    { id: '2', title: 'Item Two' },
    { id: '3', title: 'Item Three' },
    { id: '4', title: 'Item Four' },
    { id: '5', title: 'Item Five' },
    { id: '6', title: 'Item Six' },
    { id: '7', title: 'Item Seven' },
    { id: '8', title: 'Item Eight' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.currentId = params.get('id');
      if(this.currentId) {
        this.setCurrentItem(this.currentId);
      }
    })
  }

  setCurrentItem(id) {
    this.currentItem = this.items.find(item => item.id === id);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  x = [
    {
      name: 'გიორგი',
      surname: 'ვაშაკიძე',
      personalNumber: '12345678910'
    },
    {
      name: 'გიორგი2',
      surname: 'ვაშაკიძე2',
      personalNumber: '12345678919'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}

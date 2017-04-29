import { Component, OnInit } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';


@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
   title = 'Inbox';
   constructor() { }

  ngOnInit(): void {
    this.title = 'Inbox';
  }

}

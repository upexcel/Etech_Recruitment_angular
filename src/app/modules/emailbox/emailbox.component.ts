import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { EmailModalComponent } from '../email-modal/email-modal.component';

@Component({
    selector: 'app-emailbox',
    templateUrl: './emailbox.component.html',
    styleUrls: ['./emailbox.component.scss']
})
export class EmailboxComponent implements OnInit {
    dialogRef: MdDialogRef <any>;
    data: any;
    @Input() email: any;
    @Input() tags: any[];
    @Output() refresh = new EventEmitter<string>();
    constructor(public dialog: MdDialog, private assignEmail: ImapMailsService) { }

    ngOnInit() {
    }

    openEmail(email: any) {
        this.dialogRef = this.dialog.open(EmailModalComponent, {
            height: '550px',
            width: '65%'
        });
        this.dialogRef.componentInstance.email = email;
        this.dialogRef.componentInstance.tags = this.tags;
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });
    }
    assignToEmail(id: string, emailId: string) {
        this.data = {
            'tag_id': id,
            'mongo_id': emailId
        };
        this.assignEmail.assignTag(this.data).subscribe((data) => {
            this.refresh.emit(id);
        }, (err) => {
            console.log(err);
        });
    }
}


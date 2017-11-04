import {
    Component,
    OnInit,
    Output,
    EventEmitter
} from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import {
    ImapMailsService
} from '../../service/imapemails.service';

@Component({
    selector: 'app-slack-component-form',
    templateUrl: './slack-component-form.component.html',
    styleUrls: ['./slack-component-form.component.scss']
})
export class SlackComponentFormComponent implements OnInit {
     @Output() addedTeam = new EventEmitter<any>();
    showmessage: boolean;
    message: string;
    slackinfoForm: FormGroup;
    status: boolean = true;
   
    constructor(private fb: FormBuilder, public _apiService: ImapMailsService) {
    }
    ngOnInit() {
        this.validate();
    }
    validate(){
                this.slackinfoForm = this.fb.group({
            teamName: ['', Validators.required],
            token: ['', Validators.required],
            // status:['', Validators.required],
        })
    }
    addInfo(forminfo: any) {
        forminfo.status = this.status;
        this._apiService.sendSlackInfo(forminfo).subscribe((data) => {
             this.addedTeam.emit();
             this.validate();
        }, (err) => {

        });

    }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ImapMailsService } from 'app/service/imapemails.service';

@Component({
  selector: 'app-candidate-schedule',
  templateUrl: './candidate-schedule.component.html',
  styleUrls: ['./candidate-schedule.component.scss']
})
export class CandidateScheduleComponent implements OnInit {
  scheduleInterviewForm: FormGroup;
  scheduleData: any;
  scheduleTime: any;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private imapMailsService: ImapMailsService,
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.paramMap.get('notificationId'));
    this.getScheduledTime();
  }

  getScheduledTime() {
    this.imapMailsService.getScheduleData().subscribe((data) => {
      this.scheduleData = data;
      console.log(this.scheduleData);
    });
    this.createForm();
  }

  createForm() {
    this.scheduleInterviewForm = this.formBuilder.group({
      sheduled_date: [null, Validators.required],
      sheduled_time: [null, Validators.required]
    });

    
    this.scheduleInterviewForm.valueChanges.subscribe(formData => {

      if (formData.sheduled_date) {
        this.filterScheduledTime(formData.sheduled_date);
      }
    })
  }

  filterScheduledTime(date) {
    const fullDate = `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`;
    console.log(fullDate)
    if (this.scheduleData && this.scheduleData.length) {
      const timing = this.scheduleData.find(element => {
        return element.date === fullDate;
      });
      this.scheduleTime = timing['time_slots']['first_round'];
    }
  }

  dateFilter = (date: Date): boolean => {
    const validDate = this.scheduleData.find(element => {
      return (new Date(element.date).getDate() === date.getDate() && new Date(element.date).getMonth() === date.getMonth());
    })
    if (validDate) {
      return true;
    }
  }
}

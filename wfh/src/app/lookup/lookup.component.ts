import {UserService} from '../shared/user.service';
import {User} from '../shared/user.model';
import {Entry} from '../shared/Entry.model';
import {EntryService} from '../shared/entry.service';
import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: 'lookup.component.html',
  styleUrls: ['lookup.component.css']
})

export class LookupComponent implements OnInit {
  users: User[];
  selectedUser: string;
  selectedUserName: string;
  date: Date;
  entry: Entry;
  showQueryResults = false;

  constructor(private userService: UserService, private entryService: EntryService) {
  }

  ngOnInit() {
    this.entryService.getEntriesByName(this.selectedUser).subscribe((entries: Entry[]) => {
      console.log(entries);
    });
  }


  // receiveEmployee($event) {
  //     this.selectedUserName = $event;
  //     if (this.users) {
  //         this.selectedUser = this.users.find(u => u.name === this.selectedUserName);
  //     }
  //     this.getEntry();
  // }

  receiveDate($event) {
    this.date = $event;
    this.getEntry();
  }

  getEntry() {
    // this.entryService.getEntriesByName(this.selectedUser).subscribe((entries: Entry[]) => {
    //   console.log(entries);
    //   // this.entry = entries[0];
    //   // this.showQueryResults = true;
    // });
    // if (this.selectedUser && this.date) {
    //     this.entry = this.selectedUser.entries.find(entry => entry.date === this.date.toDateString());
    //     if (!this.entry) {
    //         this.entry = {
    //             date: this.date.toDateString(),
    //             morning_startTime: '--',
    //             morning_didYesterday: '--',
    //             morning_doingToday: '--',
    //             morning_notes: '--',
    //             evening_endTime: '--',
    //             evening_didToday: '--',
    //             evening_notes: '--'
    //         };
    //     }
    // }
  }
}

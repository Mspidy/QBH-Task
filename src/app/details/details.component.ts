import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactAPIService } from '../contactsService/contact-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  newContactInfo!: FormGroup;
  submitted = false;
  name:any
  constructor(public apiService: ContactAPIService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.newContactInfo = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(1),Validators.maxLength(250)]),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    })
  }

  get f() { return this.newContactInfo.controls; }

  submitForm() {
    if(this.newContactInfo.valid){
      console.log(this.newContactInfo.value);
    let obj = {
      name: this.newContactInfo.value.name,
      email: this.newContactInfo.value.email,
      phone: this.newContactInfo.value.phone
    }

    this.apiService.newUsersInfo(obj).subscribe((res: any) => {
      try {
        if (res) {
          console.log(res)
          this.newContactInfo.reset();
          this.router.navigateByUrl('/download');
        }
      } catch (err) {
        console.log(err)
      }
    })
    }
  }

}

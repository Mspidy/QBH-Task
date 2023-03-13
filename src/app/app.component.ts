import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QBH_task';
  // newContactInfo!:FormGroup;
  // constructor(public apiService: ContactAPIService, private router: Router){}

  // ngOnInit(){
  //   this.newContactInfo = new FormGroup({
  //     name: new FormControl('', Validators.required),
  //     email: new FormControl('', Validators.required),
  //     phone: new FormControl('', Validators.required),
  //   })
  // }


  // head=[[
  //   "Id",
  //   "Name",
  //   "Email",
  //   "Phone"
  // ]]

  // data=[[
  //   1,
  //   'Prabhat',
  //   'Prabhat3cool@gmail.com',
  //   '+917908679275'
  // ]]

  // makePDF(){
  //   let pdf = new jsPDF();
  //   // pdf.text("Hello Prabhat", 10,10);
  //   autoTable(pdf,{
  //     head: this.head,
  //     body:this.data,
  //   })
  //   pdf.save();
  // }

  // submitForm(){
  //   console.log(this.newContactInfo.value);
  //   let obj={
  //     name: this.newContactInfo.value.name,
  //     email: this.newContactInfo.value.email,
  //     phone: this.newContactInfo.value.phone
  //   }

  //   this.apiService.newUsersInfo(obj).subscribe((res:any)=>{
  //     try{
  //       if(res){
  //         console.log(res)
  //         this.newContactInfo.reset();
  //         this.router.navigateByUrl('/download');
  //         this.makePDF();
  //       }
  //     } catch(err){
  //       console.log(err)
  //     }
  //   })
  // }
}

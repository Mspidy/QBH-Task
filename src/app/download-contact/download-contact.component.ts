import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
import { ContactAPIService } from '../contactsService/contact-api.service';

@Component({
  selector: 'app-download-contact',
  templateUrl: './download-contact.component.html',
  styleUrls: ['./download-contact.component.css']
})
export class DownloadContactComponent {

  constructor(public http:HttpClient, public apiService: ContactAPIService) {}

  head=[[
    "Id",
    "Name",
    "Email",
    "Phone"
  ]]

  data=[]
  datas:any=[]

  ngOnInit(){
    this.getAllUser();
    console.log(typeof(this.head))
  }

  makePDF(){
    let pdf = new jsPDF();
    // pdf.text("Hello Prabhat", 10,10);
    autoTable(pdf,{
      head: this.head,
      body:this.datas,
    })
    pdf.save();
  }

  getAllUser(){
    this.apiService.getAllUserInfo().subscribe((res:any)=>{
      console.log(res)
      this.data=res;
      console.log(Object.values(this.data[0]))
      for(let j = 0; j<this.data.length;j++){
        this.datas[j]=Object.values(this.data[j]);
      }
      console.log(this.datas)
    })
  }

}

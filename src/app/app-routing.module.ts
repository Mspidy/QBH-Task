import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { DownloadContactComponent } from './download-contact/download-contact.component';

const routes: Routes = [
  {path:'download', component: DownloadContactComponent},
  {path:'contactDetails', component: DetailsComponent},
  { path: '**', redirectTo: 'contactDetails' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

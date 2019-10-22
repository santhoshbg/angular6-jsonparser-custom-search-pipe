import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // { path: 'login', component: LoginComponent },
    // { path: 'add-user', component: AddUserComponent },
    // { path: 'list-user', component: ListUserComponent },
    // { path: 'edit-user', component: EditUserComponent },
    // { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

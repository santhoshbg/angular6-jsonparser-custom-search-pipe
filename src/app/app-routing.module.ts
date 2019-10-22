import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
    import { from } from 'rxjs';
import {MenuComponent} from './menu/menu.component';
import {HeaderComponent} from './header/header.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'twittersearch', component: HeaderComponent },
    { path: 'menus', component: MenuComponent },
    // { path: 'list-user', component: ListUserComponent },
    // { path: 'edit-user', component: EditUserComponent },
    // { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

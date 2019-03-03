import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { SericesComponent } from './serices/serices.component';
const routes: Routes = [
{
path:'',
component:HomeComponent
},
{
path:'about',
component:AboutComponent
},
{
path:'team',
component:TeamComponent
},
{
path:'contact',
component:ContactComponent
},
{
path:'service',
component:SericesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

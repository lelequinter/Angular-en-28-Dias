import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './users/list/list.component';
import { UserComponent } from './users/user/user.component';
import { PermissionsGuard } from './guards/permissions.guard';
import { WithoutsaveGuard } from './guards/withoutsave.guard';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './users/details/details.component';
import { DataResolverService } from './resolvers/data.resolver.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'contact-reactive',
    component: ContactReactiveComponent,
    canDeactivate: [WithoutsaveGuard],
    resolve: {departments: DataResolverService}
  },
  {
    path: 'contact-template/:id',
    component: ContactComponent,
    resolve: {departments: DataResolverService}
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UserComponent,
    canActivate: [PermissionsGuard],
    children: [
      { path: 'list', component: ListComponent },
      { path: 'details', component: DetailsComponent },
    ],
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

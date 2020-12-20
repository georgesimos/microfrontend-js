import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'app1',
    component: WrapperComponent,
    data: {
      importName: 'app1',
      elementName: 'app1-element',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

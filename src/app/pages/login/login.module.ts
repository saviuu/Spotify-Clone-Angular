import { LoginRotas } from './login.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
      CommonModule,
      RouterModule.forChild(LoginRotas)
   ]
})
export class LoginModule { }

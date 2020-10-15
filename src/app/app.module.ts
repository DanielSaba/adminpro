import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routers

import{APP_ROUTES} from './app.routes';

//modules

import { PagesModule } from './pages/pages.module';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { AppRoutingModule } from './app-routing.module';

//TTEMP
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

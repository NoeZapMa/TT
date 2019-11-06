import { BrowserModule           } from '@angular/platform-browser';
import { NgModule                } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule        } from './app-routing.module'
import { MaterialModule          } from './material.component';
import { AppComponent            } from './app.component';

import { LoginComponent          } from './components/login/login.component';
import { AlumnoComponent         } from './components/alumno/alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

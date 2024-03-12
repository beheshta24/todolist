import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TodoComponent} from "./features/components/todo.component";
import { SidebarModule } from 'primeng/sidebar';
import { ListboxModule } from 'primeng/listbox';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [AppComponent,TodoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    SidebarModule,
    ListboxModule,
    CalendarModule,
    DropdownModule,


  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }

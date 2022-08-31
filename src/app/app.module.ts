import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { FormNewItemComponent } from './form-new-item/form-new-item.component';
import { CitiesComponent } from './cities/cities.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { ContactComponent } from './contact/contact.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, FormNewItemComponent, CitiesComponent, FilterPipe, ContactComponent, ContactReactiveComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

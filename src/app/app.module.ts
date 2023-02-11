import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './login/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { MainComponent } from './main/main/main.component';
import { SecondaryComponent } from './main/secondary/secondary.component';
import { AccountsComponent } from './main/secondary/accounts/accounts.component';
import { PlaceholdersComponent } from './main/secondary/placeholders/placeholders.component';
import { ItemsComponent } from './main/main/items/items.component';
import { DictionaryComponent } from './main/dictionary/dictionary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainComponent,
    SecondaryComponent,
    AccountsComponent,
    PlaceholdersComponent,
    ItemsComponent,
    DictionaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

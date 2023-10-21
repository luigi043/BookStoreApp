import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { WeeklyComponent } from './components/weekly/weekly.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/about/signup/signup.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { FormsModule } from '@angular/forms';
import { BookDetailsComponent } from './components/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    WeeklyComponent,
    LoginComponent,
    SignupComponent,
    BookCardComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

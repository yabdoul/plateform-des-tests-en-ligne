import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthpageComponent } from './authpage/authpage.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestsComponent } from './tests/tests.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { ChoixComponent } from './choix/choix.component';
import { RadiochoiceComponent } from './radiochoice/radiochoice.component';
import { DoneQuizzComponent } from './done-quizz/done-quizz.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthpageComponent,
    MainpageComponent,
    NavbarComponent,
    DashboardComponent,
    TestsComponent,
    CreatePageComponent,
    ChoixComponent,
    RadiochoiceComponent,
    DoneQuizzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ChoixComponent]
})
export class AppModule { }

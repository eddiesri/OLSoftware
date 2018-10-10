import { RouterModule, Routes} from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { HeaderComponent } from './static-components/header/header.component';
import { FormsModule} from '@angular/forms';
import { FooterComponent } from './static-components/footer/footer.component';
import { HomeComponent } from './dynamic-components/home/home.component';
import { RegisterComponent } from './dynamic-components/register/register.component';
import { SidebarComponent } from './static-components/sidebar/sidebar.component';
import { NotFoundComponent } from './dynamic-components/not-found/not-found.component';
import { LoginComponent } from './dynamic-components/login/login.component';


const routes: Routes = [


  { path: 'inicio' , component: HomeComponent, pathMatch: 'full'},
  { path: '' , component: HomeComponent, pathMatch: 'full'},
  { path: 'register' , component: RegisterComponent, pathMatch: 'full'},
  { path: 'login' , component: LoginComponent, pathMatch: 'full'},
  { path: 'notFound' , component: NotFoundComponent, pathMatch: 'full'},
  { path: '**' , redirectTo: 'notFound' , pathMatch : 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    SidebarComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule
  ],
  providers: [AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }

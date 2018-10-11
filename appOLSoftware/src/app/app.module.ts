// base
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// auth
import { AuthService } from './services/auth.service';
// Forms
import { FormsModule} from '@angular/forms';
// fireBase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
// routing
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';
// components
/// static
import { AppComponent } from './app.component';
import { HeaderComponent } from './static-components/header/header.component';
import { FooterComponent } from './static-components/footer/footer.component';
/// dynamic
import { HomeComponent } from './dynamic-components/home/home.component';

import { RegisterComponent } from './dynamic-components/register/register.component';
import { NotFoundComponent } from './dynamic-components/not-found/not-found.component';
import { LoginComponent } from './dynamic-components/login/login.component';
import { TableComponent } from './dynamic-components/table/table.component';

const routes: Routes = [


  { path: 'inicio' , component: HomeComponent, pathMatch: 'full'},
  { path: '' , component: HomeComponent, pathMatch: 'full'},
  { path: 'register' , component: RegisterComponent, pathMatch: 'full'},
  { path: 'tabla' , component: TableComponent, pathMatch: 'full'},

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
    NotFoundComponent,
    LoginComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    FormsModule
    ],
  providers: [ AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

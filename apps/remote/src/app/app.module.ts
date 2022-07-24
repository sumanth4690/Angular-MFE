import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';

// const ROUTES: Routes = [{ path: '', component: AboutComponent }];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path:'expose',
        loadChildren:()=>import('./exposes/exposes.module').then((m)=>m.ExposesModule)
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './login/auth/auth-guard.guard';
import { HomeComponent } from './login/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { ItemsComponent } from './main/main/items/items.component';
import { MainComponent } from './main/main/main.component';
import { AccountsComponent } from './main/secondary/accounts/accounts.component';
import { PlaceholdersComponent } from './main/secondary/placeholders/placeholders.component';
import { SecondaryComponent } from './main/secondary/secondary.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent,
    children: [
      { path: 'secondary', component: SecondaryComponent,
        children: [
          { path: 'accounts', component: AccountsComponent },
          { path: 'placeholders', component: PlaceholdersComponent },
        ],
      },
      { path: 'dictionary', loadChildren: () => import
        ('./main/dictionary/dictionary.module')
        .then((m) => m.DictionaryModule
        ),
      },
      { path: 'items', component: ItemsComponent }, 
      { path: 'items/:id', component: ItemsComponent },
    ],
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

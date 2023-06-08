import { Route } from '@angular/router';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { TableComponent } from './core/table/table.component';
import { FormsComponent } from './core/forms/forms.component';

export const appRoutes: Route[] = [
  {path:'',redirectTo:'app/forms',pathMatch:'full'},
  {path:'app',component:NavbarComponent,children:[
    {path:'table',component:TableComponent},
    {path:'forms',component:FormsComponent},

  ]}
];

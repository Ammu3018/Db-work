import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@nx/material';
import { TableComponent } from './table/table.component';
import { FormsComponent } from './forms/forms.component';
import { SharedModule } from '@nx/shared';

@NgModule({
  declarations: [TableComponent, FormsComponent],
  imports: [CommonModule, MaterialModule,SharedModule],
})
export class CoreModule {}

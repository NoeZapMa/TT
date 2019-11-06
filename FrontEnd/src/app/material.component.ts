import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatTabsModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ],
})
export class MaterialModule {}

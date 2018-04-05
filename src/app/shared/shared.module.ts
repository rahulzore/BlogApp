import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { FromNowPipe } from './from-now.pipe';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MaterialModule
  ],
  exports:[CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, FromNowPipe ],
  declarations: [FromNowPipe]
})
export class SharedModule { }

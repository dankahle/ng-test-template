import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import {CoreModule} from '../core/core.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    CoreModule,
    FormsModule,
    CapitalizePipe
  ],
  declarations: [CapitalizePipe]
})
export class SharedModule { }
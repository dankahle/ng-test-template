import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModule} from '../core/core.module';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    CoreModule,
    FormsModule,
    FlexLayoutModule
  ],
  declarations: []
})
export class SharedModule { }

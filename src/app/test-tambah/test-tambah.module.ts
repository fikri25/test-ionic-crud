import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestTambahPageRoutingModule } from './test-tambah-routing.module';

import { TestTambahPage } from './test-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestTambahPageRoutingModule
  ],
  declarations: [TestTambahPage]
})
export class TestTambahPageModule {}

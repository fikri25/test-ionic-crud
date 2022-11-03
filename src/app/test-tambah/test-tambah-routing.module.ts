import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestTambahPage } from './test-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: TestTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestTambahPageRoutingModule {}

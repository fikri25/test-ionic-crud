import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@capacitor-community/http';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-test-tambah',
  templateUrl: './test-tambah.page.html',
  styleUrls: ['./test-tambah.page.scss'],
})
export class TestTambahPage implements OnInit {
  nil_awal: any;
  nil_akhir: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }

  addTest() {
    let url = this._apiService.apiURL() + "/tambahTest.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        nil_awal: this.nil_awal,
        nil_akhir: this.nil_akhir
      },
    }).then((data) => {
      this.nil_awal = '';
      this.nil_akhir = '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Input data',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/test');
    }, (error) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Input data',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })
  }

}


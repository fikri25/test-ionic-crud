import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@capacitor-community/http';
import { ApiService } from '../api.service';
import { AlertController, LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.page.html',
  styleUrls: ['./test-edit.page.scss'],
})
export class TestEditPage implements OnInit {
  id: any;
  nil_awal: any;
  nil_akhir: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public LoadingController: LoadingController,
  ) { 
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilTest(this.id);
    })
  }

  ngOnInit() {
  }

  ambilTest(id) {
    this._apiService.ambilTest(id).subscribe((res: any) => {
      console.log('sukses', res);
      let test = res;
      this.nil_awal = test.nil_awal;
      this.nil_akhir = test.nil_akhir;
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }


  editTest() {
    let url = this._apiService.apiURL() + "/editTest.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        nil_awal: this.nil_awal,
        nil_akhir: this.nil_akhir,
        id: this.id
      },
    }).then((data) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Edit Data',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/test');
    }, (err) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Edit Data',
        buttons: ['OK']
      }).then(res => {
        res.present()
      });
    })
  }

}

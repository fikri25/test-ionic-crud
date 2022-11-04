import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) {

  }

  //link API
  apiURL() {
    return "http://localhost/test_ionic_crud/api";
  }
    
  getTest() {
    return this.http.get(this.apiURL() + '/tampilTest.php');
  }

  deleteTest(id) {
    return this.http.delete(this.apiURL() + '/hapusTest.php?id=' + id);
  }

  ambilTest(id) {
    return this.http.get(this.apiURL() + '/lihatTest.php?id=' + id);
  }


}

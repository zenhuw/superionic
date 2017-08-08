import {
  Component, OnChanges, Input,
  trigger, state, animate, transition, style
} from '@angular/core';
import { NavController } from 'ionic-angular';
import {DaftarnasabahPage} from '../daftarnasabah/daftarnasabah';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  menus: Array<{ name: string, subMenu: any[], expanded: boolean }>;

  itemExpandHeight: number = 44;

  submenus: Array<{ name: string, link: string }>;

  constructor(public navCtrl: NavController) {
    this.menus = [];
    this.menus = [{
      name: 'Laku Pandai',
      subMenu: [{
        name: 'Daftar Nasabah',
        link: 'DaftarnasabahPage'
      }, {
        name: 'Setor Tunai',
        link: 'SetortunaiPage'
      },
      {
        name: 'Tarik Tunai',
        link: 'TariktunaiPage'
      }],
      expanded: false
    },
    {
      name: 'Pembelian',
      subMenu: [{
        name: 'Tiket Maskapai',
        link: 'TiketmaskapaiPage'
      }, {
        name: 'Tiket Kereta',
        link: 'TiketkeretaPage'
      }, {
        name: 'Hotel',
        link: 'HotelPage'
      }, {
        name: 'Pulsa',
        link: 'PulsaPage'
      }],
      expanded: false
    },
    {
      name: 'Pembayaran',
      subMenu: [{
        name: 'Multi Payment',
        link: 'MultipaymentPage'
      },
      {
        name: 'Pasca Bayar',
        link: 'PascabayarPage'
      },
      {
        name: 'Multi Finance',
        link: 'MultifinancePage'
      },
      {
        name: 'Voucher Game',
        link: 'VouchergamePage'
      },
      {
        name: 'Cek Tagihan',
        link: 'CektagihanPage'
      }],
      expanded: false
    },
    {
      name: 'Produk Perbankan',
      subMenu: [{
        name: 'KPR',
        link: 'KprPage'
      },
      {
        name: 'Kredit Mikro',
        link: 'KreditmikroPage'
      }],
      expanded: false
    }
    ];


  }
  toggleGroup = function (menuss) {
    this.menus.map((listMenu) => {
      if (menuss == listMenu) {
        listMenu.expanded = !listMenu.expanded;
      } else {
        listMenu.expanded = false;
        console.log(listMenu.expanded)
      }
    })
  };

  gotoPage(menu) {
    console.log(menu);
  this.navCtrl.push(menu);
  }



}

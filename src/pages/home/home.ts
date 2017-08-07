import { Component,OnChanges, Input, 
    trigger, state, animate, transition, style } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  menus: Array<{name: string, subMenu: string[], expanded: boolean}>;
  
  itemExpandHeight: number = 44;

  constructor(public navCtrl: NavController) {
    this.menus=[];
    this.menus=[{
      name: 'Laku Pandai',
      subMenu:['Daftar Nasabah','Setor Tunai','Tarik Tunai'],
      expanded: false},
      {name: 'Pembelian',
      subMenu:['Tiket Maskapai','Tiket Kereta','Hotel','Pulsa'],
      expanded: false},
      {name: 'Pembayaran',
      subMenu:['Multi Payment','Pasca Bayar','Multi Finance','Voucher Game','Cek Tagihan'],
      expanded: false},
      {name: 'Produk Perbankan',
      subMenu:['KPR','Kredit Mikro'],
      expanded: false}
  ];


  }
  toggleGroup =  function(menuss){
    this.menus.map((listMenu)=>{
    if(menuss== listMenu){
    listMenu.expanded=!listMenu.expanded;
    console.log(listMenu.expanded)
    }else{
      listMenu.expanded=false;
      console.log(listMenu.expanded)
    }
    })
  };

  

}

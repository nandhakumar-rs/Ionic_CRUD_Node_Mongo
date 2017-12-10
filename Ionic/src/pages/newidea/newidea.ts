import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { DataService } from '../service/dataService';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/**
 * Generated class for the NewideaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newidea',
  templateUrl: 'newidea.html',
})
export class NewideaPage {
constent:string = 'Add';
  constructor(public navCtrl: NavController, public navParams: NavParams,private service:DataService,private toast:ToastController) {
  }

  ionViewDidLoad() {
   
  }
add(form:NgForm){
  this.service.addidea(form.value.title,form.value.content).subscribe(data=>{
    
    const t = this.toast.create({
      message:data.message,
      duration:3000
    })
    t.present()
  })

}

}

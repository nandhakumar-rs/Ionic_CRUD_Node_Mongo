import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage implements OnInit{
title:string;
content:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private view:ViewController) {
 
  }
ngOnInit(){
  const item = this.navParams.get('item');
  this.title = item.title;
  this.content = item.content;
  console.log(this.title,this.content)
}
  ionViewDidLoad() {

  }


save(){
  this.view.dismiss({item:{title:this.title,content:this.content}})
}
cancel(){
  this.view.dismiss()
}
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../service/dataService';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { EditPage } from '../edit/edit';

/**
 * Generated class for the IdeasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ideas',
  templateUrl: 'ideas.html',
})
export class IdeasPage {
ideas:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private service:DataService,
  private load:LoadingController,private model:ModalController) {
  }
  ionViewWillEnter(){
    const l = this.load.create({
      content:"Ideas Loading ..."
    })
    l.present()
    this.service.getData().subscribe(data=>{
       this.ideas = data
  
        l.dismiss()
      
     
    })
  }

delete(index){
  
   this.service.removeIdea(this.ideas[index]._id).subscribe((res)=>{
    this.service.getData().subscribe(data=>{
      this.ideas = data
    })
   
})
}
edit(index){
  const title = this.ideas[index].title;
  const content = this.ideas[index].content;
  const id = this.ideas[index]._id
const modal = this.model.create(EditPage,{item:{title:title,content:content}})

modal.present()

modal.onDidDismiss(data=>{
  if(data){
  console.log(data.item.title,data.item.content)
  this.service.editIdea(id,data.item.title,data.item.content).subscribe((res)=>{
    this.service.getData().subscribe(data=>{
      this.ideas = data
    })
  })
}
else{
  console.log('closed')
}
})
  
}
}

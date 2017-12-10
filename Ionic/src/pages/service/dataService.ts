
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Response } from "@angular/http/src/static_response";
import { IdeaModel } from "../model/idea";

@Injectable()
export class DataService{
ideas:IdeaModel[]=[]
tempidea:IdeaModel;
    constructor(private http:Http){}

    addidea(title:string,content:string){
        this.tempidea = new IdeaModel(title,content)
       return this.addData();
    }

addData(){

    return this.http.post("https://salty-journey-45118.herokuapp.com/post",{"title":this.tempidea.title,"content":this.tempidea.idea}).map((res:Response)=>{
    console.log(res.json())   
    return res.json()
    }).do(()=>{
        this.ideas.push(new IdeaModel(this.tempidea.title,this.tempidea.idea))
        console.log(this.ideas)
    })

}


getideas(){
    
    return this.ideas.slice()
}

removeIdea(id){
    
 return this.http.delete("https://salty-journey-45118.herokuapp.com/delete/"+id)
  

}
getData(){


return this.http.get("https://salty-journey-45118.herokuapp.com/getideas").map((res:Response)=>{
    console.log(res.json())
   
    return res.json();
}).do((data)=>{
    this.ideas = data;
     console.log(this.ideas)
})

}

editIdea(id,title,idea){

    return this.http.put("https://salty-journey-45118.herokuapp.com/update/" + id,{title:title,content:idea})

}


}
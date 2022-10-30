import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Storage, ref, uploadBytes, list, getDownloadURL} from '@angular/fire/storage'
=======
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
>>>>>>> 1e2b5e5c5f908c8f3161f3c781eb7bbf216f43e3

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url:string = "";

<<<<<<< HEAD
  constructor(private storage: Storage) { }

 public uploadImage($event: any, name:string){
  const file = $event.target.files[0];
  //console.log(file)
  const imgRef = ref(this.storage, `imagen/`+ name);
  uploadBytes(imgRef, file)
  .then(reponse=>{this.getImages()})
  .catch(error=> console.log(error))

 }
 getImages(){
  const imagesRef = ref(this.storage, 'imagen')
  list(imagesRef)
  .then(async response=>{
    for(let item of response.items){
      this.url = await getDownloadURL(item);
      console.log("la url es : "+  this.url)
    }
  })
  .catch(error=> console.log(error))
 }

=======
  constructor(private storage:Storage) { }

  public uploadImage($event: any, name:string){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `imagen/`+ name);
    uploadBytes(imgRef, file)
    .then(response=>{this.getImages()})
    .catch(error=>console.log(error))
    

  }

  getImages(){
    const imagesRef =  ref(this.storage, 'imagen' )
    list(imagesRef)
    .then(async response=>{
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("la url es :"+ this.url)
      }
    }) 
    .catch(error=>console.log(error)) 

  }
>>>>>>> 1e2b5e5c5f908c8f3161f3c781eb7bbf216f43e3
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona';
import { ImageService } from 'src/app/service/image.service';
import { SPersonaService } from 'src/app/service/s-persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  perso: Persona = null;

  constructor(private sPersona: SPersonaService, private activedRouter: ActivatedRoute,
<<<<<<< HEAD
    private router: Router, public imageService: ImageService) { }
=======
    private router: Router,
    public imageService: ImageService) { }
>>>>>>> 1e2b5e5c5f908c8f3161f3c781eb7bbf216f43e3

  ngOnInit(): void {
    const id = this.activedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(data => {
      this.perso = data;
    }, err => {
      alert("Error al modificar persona");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.activedRouter.snapshot.params['id'];
<<<<<<< HEAD
    this.perso.img = this.imageService.url;
=======
    this.perso.img = this.imageService.url
>>>>>>> 1e2b5e5c5f908c8f3161f3c781eb7bbf216f43e3
    this.sPersona.update(id, this.perso).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar persona");
      this.router.navigate(['']);
    })
  }

uploadImage($event: any) {
  const id = this.activedRouter.snapshot.params['id'];
<<<<<<< HEAD
  const name= "perfil_"+ id;
  this.imageService.uploadImage($event, name)


=======
  const name = "perfil_" + id;
  this.imageService.uploadImage($event, name);
>>>>>>> 1e2b5e5c5f908c8f3161f3c781eb7bbf216f43e3
    
  }

}

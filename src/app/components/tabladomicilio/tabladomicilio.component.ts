import { Component, OnInit } from '@angular/core';
import { Domicilio } from 'src/app/modelo/domicilio';
import { ServiciodomicilioService } from 'src/app/servicios/serviciodomicilio.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tabladomicilio',
  templateUrl: './tabladomicilio.component.html',
  styleUrls: ['./tabladomicilio.component.css']
})
export class TabladomicilioComponent implements OnInit {

  pageActual: number = 1;
  public domicilios: Domicilio[];
  indice: number;

  public domicilioSeleccionado: Domicilio = {
    id: 0,
    calle : '',
    numero : null,
    localidad : '',
    departamento : '',
    piso : '', 
    personaRelacionada: null
  };

  constructor(private servicio: ServiciodomicilioService, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data)=>{ 
      this.getAllDomicilios(data['id']);
  });
  }

  getAllDomicilios(id:number) {
    this.servicio.getAll(id).subscribe(res => {
      this.domicilios = res;
    },
      err => {
        alert('Error al traer todas los domicilios: ' + err);
      });
  }

  delete(domicilio: Domicilio) {
    const opcion = confirm('¿Desea eliminar este registro?');
    if (opcion === true) {
      this.servicio.delete(domicilio.id).subscribe(
        res => {
          alert('El registro fue eliminado con éxito');
          const indexDomicilio = this.domicilios.indexOf(domicilio);
          this.domicilios.splice(indexDomicilio, 1);
        },
        err => {
          alert('Error al eliminar el registro seleccionado: ' + err);
        });
    }
  }

  onPreUpdate(domicilio: Domicilio) {
    this.domicilioSeleccionado = domicilio;
    this.indice = this.domicilios.indexOf(domicilio);
  }

}

import { Component, OnInit, ViewChild, ElementRef, Host, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ServiciodomicilioService } from 'src/app/servicios/serviciodomicilio.service';
import { TabladomicilioComponent } from '../tabladomicilio/tabladomicilio.component';
import { Domicilio } from 'src/app/modelo/domicilio';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-domicilio',
  templateUrl: './modal-domicilio.component.html',
  styleUrls: ['./modal-domicilio.component.css']
})
export class ModalDomicilioComponent implements OnInit {

  @ViewChild('btnClose', { static: true }) btnClose: ElementRef;

  public formDomicilio: FormGroup;
  public domicilio: any;
  public edit = false;
  public idPersona : number;

  constructor(private servicio: ServiciodomicilioService,
    @Host() private tabla: TabladomicilioComponent,
    private formBuilder: FormBuilder, private actRoute: ActivatedRoute) { }

  @Input() set domicilioSeleccionado(valor) {
    this.onBuild();
    if (valor) {
      this.domicilio = valor;
      this.formDomicilio.patchValue({
        id: valor.id,
        calle: valor.calle,
        numero: valor.numero,
        localidad: valor.localidad,
        departamento: valor.departamento,
        piso: valor.piso
      });
      if (valor.id !== 0) {
        this.edit = true;
      } else {
        this.edit = false;
      }
    }
  }

  ngOnInit() {
    this.onBuild();
    this.actRoute.params.subscribe(data=>{
      this.idPersona = data['id'];
  });
  }

  onBuild() {
    this.formDomicilio = this.formBuilder.group({
      id: null,
      calle: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]),
      localidad: new FormControl('', [Validators.required]),
      departamento: new FormControl('', [Validators.required]),
      piso: new FormControl('', [Validators.required])
    });
  }

  onSave(formDomicilio: FormGroup): void {
    formDomicilio.value.personaRelacionada = this.idPersona;
    if (formDomicilio.value.id === null) {
      // Add
      this.add(formDomicilio.value);
    } else {
      // Update
      this.update(formDomicilio.value);
    }
    this.btnClose.nativeElement.click();
    this.tabla.indice = null;
  }

  add(domicilio: Domicilio) {
    this.servicio.post(domicilio).subscribe(
      res => {
        this.tabla.domicilios.push(res);
      },
      err => {
        alert('Ocurrió un error al agregar el domicilio');
      }
    );
  }

  update(domicilio: Domicilio) {
    this.servicio.put(domicilio.id, domicilio).subscribe(
      res => {
        alert('El domicilio fue actualizado con éxito');
        this.tabla.domicilios.splice(this.tabla.indice, 1, domicilio);
      },
      err => {
        alert('Ocurrió un error al actualizar domicilio');
      }
    );
  }

  onClose() {
    this.domicilioSeleccionado = {
      id: 0,
      calle: '',
      numero: null,
      localidad: '',
      departamento: '',
      piso: ''
    };
  }

}

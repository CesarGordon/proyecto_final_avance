import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { ServicioCambioEstadoService } from 'src/app/services/servicio-cambio-estado.service';

@Component({
  selector: 'app-cambiar-estado',
  templateUrl: './cambiar-estado.component.html',
  styleUrls: ['./cambiar-estado.component.scss']
})
export class CambiarEstadoComponent implements OnInit {

  formulario:FormGroup;

  constructor(private fb:FormBuilder,private servicio:ServicioCambioEstadoService){ 
    this.formulario=this.fb.group({
        id:['',Validators.required],
        estado:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  EnviarDatosEstado(){
    //console.log(this.formulario.get("asunto")?.value);
    this.servicio.CambiarEstado({
      id:this.formulario.get("id")?.value,
      estado:this.formulario.get("estado")?.value,
      prioridad:"",
      categoria:"",
      asunto:"",
      descripcion:"",
    }).subscribe(respuesta=>{
      console.log(respuesta);
    });

}                                    
}
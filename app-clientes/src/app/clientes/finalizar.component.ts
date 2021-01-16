import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente'
import { ClienteService } from './cliente.service'
import { Router } from '@angular/router'
import swal from 'sweetalert2'


@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.component.html'
})
export class FinalizarComponent implements OnInit {

  private cliente: Cliente = new Cliente()

  constructor(private clienteService: ClienteService,
  private router: Router) { }

  ngOnInit() {}

  public createUser(): void{
    this.clienteService.create(this.cliente).subscribe(
    cliente=> {this.router.navigate(['/clientes'])
    swal('Nuevo cliente', `El cliente ${cliente.nombre} ha sido creado con éxito`, 'success')
    //swal('Gracias\n\nTu información ha sido recibida', `El usuario ${cliente.nombre},
     //ha sido creado con éxito`, 'success')
  }
  );
  }

}

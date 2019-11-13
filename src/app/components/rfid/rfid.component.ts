import { Component, OnInit, ElementRef, Renderer2, ViewChild, } from '@angular/core';
import { RFIDService } from '../../services/rfid.service'
import { RFID } from 'src/app/models/rfid/rfid';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-rfid',
  templateUrl: './rfid.component.html',
  styleUrls: ['./rfid.component.css']
})
export class RfidComponent implements OnInit {
  @ViewChild("modalAsign") modal: ElementRef;
  
  registerForm: FormGroup;
  rfids:RFID []


  rfid;

  mensajesSubscription: Subscription
  mensajes: any[] = [];

  constructor(private rfidService: RFIDService,
    public fb: FormBuilder,
    private renderer: Renderer2
    ) {

      
   }

  ngOnInit() {
    this.rfidService.getRFIDS().subscribe(response =>{
      console.log(response);
      this.rfids = response;
    })
    this.registerForm = this.fb.group({
      number_RFID: ['', ],
    });    
  }

  //servicio para obtnener el RFID

  getRFID(){
    this.rfidService.getRFIDS().subscribe(response =>{
      console.log(response);
      this.rfids = response;
      
      // this.rfidService.selectedRFID = response[0];//
      
    })
  }
  
  editarRFID(){

  }
  eliminarRFID(){
    
  }

  registrarRFID(){
    const params ={
      status:false,
      number_rfid:this.rfidService.selectedRFID.number_RFID
      
    }
    this.rfidService.agregarRFID(params).subscribe(response =>{
      console.log('RFID registrado',response);
    })
  }

  enviarMsj(){
    let msj = 'hola desde angular';
    this.rfidService.enviarMSJ(msj,'')
  }

  openModalStudents(){
    this.renderer.addClass(this.modal.nativeElement, "is-active");
  }
  cerrarModal(){
    this.renderer.removeClass(this.modal.nativeElement, "is-active");
    
  }

}

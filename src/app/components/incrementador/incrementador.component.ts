import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {


  
  progreso:number=50;

  @Output() cambiovalor: EventEmitter<number>=new EventEmitter();

  
  constructor() { }

  ngOnInit(): void {
  }

onChanges(newValue:number){
    this.cambiovalor.emit(this.progreso);
    console.log(newValue);
  }

  cambiarvalor(valor){
    if(this.progreso>0 && this.progreso<100){
      this.progreso=this.progreso+valor;
        this.cambiovalor.emit(this.progreso);
    return this.progreso;
  

    }else{
      this.progreso=50;
    }

    
    
  }


 

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {
  public tareas: string[] = []
  constructor() { }
  public crear(tarea: string) {
    this.tareas.push(tarea);
  }
  public eliminar(posicion: number) {
      this.tareas.splice(posicion,1);
  }
}

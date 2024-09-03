import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonListHeader, IonList, IonItem, IonLabel, IonItemSliding, IonAvatar, IonItemOptions, IonItemOption, IonIcon, IonToast } from '@ionic/angular/standalone';
import { TaskManagerService } from '../services/task-manager.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonToast, IonIcon, IonItemOption, IonItemOptions, IonAvatar, IonItemSliding, IonLabel, IonItem, IonList, IonListHeader, IonButton, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, FormsModule],
})
export class HomePage {
  public nuevaTarea: string = "";
  public isToastOpen = false;
  constructor( public servicio: TaskManagerService ) {}
  

  crear() {
      this.servicio.crear(this.nuevaTarea);
      this.nuevaTarea ="";
  }

  eliminar(idTarea: number) {
    this.isToastOpen =true;
    this.servicio.eliminar(idTarea);
  }

  setOpen ( open : boolean) {
    this.isToastOpen = open;
  }
}

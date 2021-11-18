<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Aufgabenmanager</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-fab horizontal="end" vertical="top" slot="fixed" edge>
        <ion-fab-button @click="addTask()">+</ion-fab-button>
      </ion-fab>

      <ion-modal
        :is-open="showAddTaskDialog"
        @didDismiss="showAddTaskDialog = false"
      >
        <TaskEditor @action="onAddTaskAction"></TaskEditor>
      </ion-modal>

      <ion-list>
        <ion-item>
          <ion-label>Pokémon Yellow</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Mega Man X</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>The Legend of Zelda</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Pac-Man</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Super Mario World</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { container } from "tsyringe";

import Task from "@/models/Task";
import Zeit from "@/models/Zeit";

import TaskService from "@/services/TaskService";

import TaskEditor from "@/components/TaskEditor.vue";
import ZeitErfassung from "@/components/ZeitErfassung.vue";

import {
  IonPage,
  IonToolbar,
  IonFooter,
  IonHeader,
  IonTitle,
  IonContent,
  IonButton,
  IonActionSheet,
  IonItem,
  IonLabel,
  IonInput,
  IonList,
  IonCardTitle,
  IonCardSubtitle,
  IonNote,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonRefresher,
  IonRefresherContent,
  IonFab,
  IonFabButton,
  IonModal,
} from "@ionic/vue";
import { Options, Vue } from "vue-class-component";
import { RefresherEventDetail } from "@ionic/core";
import { chevronDownCircleOutline } from "ionicons/icons";

@Options({
  components: {
    IonPage,
    IonToolbar,
    IonFooter,
    IonHeader,
    IonTitle,
    IonContent,
    IonButton,
    IonActionSheet,
    IonItem,
    IonLabel,
    IonInput,
    IonList,
    IonCardTitle,
    IonCardSubtitle,
    IonNote,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonRefresher,
    IonRefresherContent,
    IonFab,
    IonFabButton,
    IonModal,
    TaskEditor,
  },
})
export default class Home extends Vue {
  private showAddTaskDialog: boolean = false;
  private taskService: TaskService = new TaskService();

  private addTask(): void {
    this.showAddTaskDialog = true;
  }

  private onAddTaskAction(apply: Task | null): void {
    this.showAddTaskDialog = false;
    if (apply != null) {
      this.taskService.addTask(apply);
    }
  }
}
</script>

<style lang="scss">
.my-custom-class {
  --background: #ace768;
}
</style>
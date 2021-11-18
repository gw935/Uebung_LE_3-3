<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Test</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-input v-model="task.name">Test</ion-input>
      <ion-buttons>
        <ion-button color="primary">OK</ion-button>
        <ion-button color="danger">Abbrechen</ion-button>
      </ion-buttons>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { KategorieET } from "@/models/KategorieET";
import Task from "@/models/Task";
import { Options, Vue } from "vue-class-component";

import {
  IonTitle,
  IonHeader,
  IonToolbar,
  IonInput,
  IonContent,
  IonPage,
  IonButton,
  IonButtons,
} from "@ionic/vue";

@Options({
  components: {
    IonTitle,
    IonHeader,
    IonToolbar,
    IonInput,
    IonContent,
    IonPage,
    IonButton,
    IonButtons,
  },
  emits: ["action"],
})
export default class TaskEditor extends Vue {
  private task: Task = new Task();
  private get kategorieAuswahl(): string[] {
    const ret = Object.keys(KategorieET).filter(
      (value) => typeof value === "string" && isNaN(Number(value))
    ) as string[];
    return ret;
  }
  public onApply() {
    // die naechste Zeile wandelt die String-Kategorie in die Enumeration um.
    this.task.kategorieET = Number(KategorieET[this.task.kategorieET]);
    this.$emit("action", this.task);
  }
  public onCancel() {
    this.$emit("action", null);
  }
}
</script>
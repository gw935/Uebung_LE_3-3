<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Test</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-input v-model="zeit.von">Test</ion-input>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import Zeit from "@/models/Zeit";
import moment from "moment";
import { Options, Vue } from "vue-class-component";

@Options({})
export default class ZeitErfassung extends Vue {
  private zeit: Zeit = new Zeit();
  private dauerAlsString: string = "";
  private closing: boolean = false;
  public get von(): string {
    return moment(this.zeit.von).format("HH:mm:ss") + " Uhr";
  }
  public mounted(): void {
    this.closing = false;
    this.updateDauerInStunden();
  }
  private updateDauerInStunden(): void {
    if (!this.closing) {
      this.dauerAlsString = moment
        .utc(this.zeit.dauerInMillis)
        .format("HH:mm:ss");
      setTimeout(this.updateDauerInStunden.bind(this), 1000);
    }
  }
}
</script>
import { KategorieET } from "@/models/KategorieET";
import Zeit from "@/models/Zeit";

export default class Task {
    public name: string = "";
    public beschreibung: string = "";
    public aufwand: number = 0.0;
    public kategorieET = KategorieET.Support;
    public zeiten: Zeit[] = new Array<Zeit>();

    private get kategorieAuswahl(): string[] {
        const ret = Object.keys(KategorieET).filter(value => typeof value === 'string' && isNaN(Number(value))) as string[];
        return ret;
    }
}

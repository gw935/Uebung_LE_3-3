export default class Zeit {
    public von: Date = new Date();
    public bis: Date | null = null;

    public get dauerInMillis(): number {
        const end = this.bis != null ? this.bis : new Date();
        return end.getTime() - this.von.getTime();
    }
}

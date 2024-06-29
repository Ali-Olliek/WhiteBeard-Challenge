export class Base {
  public Id: number;
  public created_at: Date;
  public updated_at: Date;
  constructor(base: any) {
    this.Id = base.id;
    this.created_at = base.created_at;
    this.updated_at = base.updated_at;
  }
}

export class Produit {
    public id: number;
    public quantite: Number;
    public prixUnitaire: Number;
    public ref: String;

  constructor(json?: any) {
              this.id = json.id;
              this.quantite = json.quantite;
              this.prixUnitaire = json.prixUnitaire;
              this.ref = json.ref;
              }
}

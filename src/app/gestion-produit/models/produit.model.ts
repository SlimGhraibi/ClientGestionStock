export class Produit {
    public ref: String;
    public quantite: Number;
    public prixUnitaire: Number;

  constructor(json: any) {
              this.ref = json.ref;
              this.quantite = json.quantite;
              this.prixUnitaire = json.prixUnitaire;
              }
}

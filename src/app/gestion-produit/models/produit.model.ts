export class Produit {
    public ref: String;
    public quantite: Number;
    public prixUnitaire: Number;

  constructor(_ref: String, _quantite: Number, _prixUnitaire) {
              this.ref = _ref;
              this.quantite = _quantite;
              this.prixUnitaire = _prixUnitaire;
              }
}

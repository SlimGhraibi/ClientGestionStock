import { GestionProduitModule } from './gestion-produit.module';

describe('GestionProduitModule', () => {
  let gestionProduitModule: GestionProduitModule;

  beforeEach(() => {
    gestionProduitModule = new GestionProduitModule();
  });

  it('should create an instance', () => {
    expect(gestionProduitModule).toBeTruthy();
  });
});

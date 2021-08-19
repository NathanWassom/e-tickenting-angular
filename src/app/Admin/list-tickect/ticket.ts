
export class Client {
  nom_client?: string;
  entreprise_client?: string;
  email_client?: string;
  tel_client?: string;
}


export class Tickets extends Client{

  public online?:number;
  public id? : number;
  public client_id?: number | undefined;
  public categorie_id?: number | undefined;
  public user_id?: number | undefined;
  public titre: string | undefined;
  public contenu: string | undefined;
  public nom: string  | undefined;
  public email?: string | undefined;
  public entreprise: string | undefined;
  public tel?: string | undefined
  public nom_client? : string;
  public categorie: string | undefined;
  public confirmEmail?: string;
  
  public statut?: number;
  // public PiecesJointes: string | undefined;

}

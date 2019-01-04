export class User {
  public id?: Number;
  public username?: String;
  public password?: String;
  public enable?: Boolean;

constructor(json: any) {
            this.id = json.id;
            this.username = json.username;
            this.password = json.password;
            this.enable = json.enable;
            }
}

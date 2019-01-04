export class Principal {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: any;
  credentialsNonExpired?: boolean;
  enabled?: boolean;
  username?: String;

constructor(json: any) {
            this.accountNonExpired = json.accountNonExpired;
            this.accountNonLocked = json.accountNonLocked;
            this.authorities = json.authorities;
            this.credentialsNonExpired = json.credentialsNonExpired;
            this.enabled = json.enabled;
            this.username = json.username;
            }
}

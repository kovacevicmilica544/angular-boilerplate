export class User {
    public id: string;
    public email: string;
    public password: string;
    public role: string;
    public firstName: string;
    public lastName: string;

    constructor(data) {
      data.id ? this.id = data.id : delete this.id;
      this.email = data.email || null;
      this.password = data.password || null;
      data.role ? this.role = data.role : delete this.role;
      this.firstName = data.firstName || null;
      this.lastName = data.lastName || null;
    }
}


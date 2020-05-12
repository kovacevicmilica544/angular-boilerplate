export class User {
    public id: string;
    public email: string;
    public password: string;
    public firstName: string;
    public lastName: string;

    constructor(data) {
      data.id ? this.id = data.id : delete this.id;
      this.email = data.email || null;
      this.password = data.password || null;
      this.firstName = data.firstName || null;
      this.lastName = data.lastName || null;
    }
}


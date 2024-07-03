export class User {
    constructor(
        public id: string,
        public username: string,
        public email: string,
        public password: string
    ) {}

    changeEmail(newEmail: string) {
        this.email = newEmail;
    }
}

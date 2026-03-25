export class UserStorage {
    private data: any[] = [
     {
        id: '1',
        name: 'John Doe',
        email: "[EMAIL_ADDRESS]",
        password: 'password',
     },
     {
        id: '2',
        name: 'Jane Doe',
        email: "[EMAIL_ADDRESS]",
        password: 'password',
     },
    ];

    constructor() {
    }

    findAll() {
        return Promise.resolve(this.data);
    }

    create(entity: any) {
        this.data.push(entity);
        return Promise.resolve(entity);
    }

    update(entity: any): Promise<any> {
        const index = this.data.findIndex((item) => item.id === entity.id);
        if (index !== -1) {
            this.data[index] = entity;
        }
        return Promise.resolve(entity);
    }

    delete(entity: any) {
        const index = this.data.findIndex((item) => item.id === entity.id);
        if (index !== -1) {
            this.data.splice(index, 1);
        }
        return Promise.resolve(entity);
    }
}
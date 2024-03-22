interface BuildMakePersonOptions {
    getUUID: () => string;
    getAge: (birthdate: Date) => number;
}

interface PersonOptions {
    name: string;
    birthdate: Date;
}

export const buildMakePerson = ({ getUUID, getAge }: BuildMakePersonOptions) => {
    return ({ name,  birthdate }: PersonOptions) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }   
    
}

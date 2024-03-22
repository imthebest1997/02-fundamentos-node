export const getAge = ( birthdate:Date ) => {
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
}

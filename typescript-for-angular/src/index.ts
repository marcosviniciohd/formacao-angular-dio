// Decorators

function exbirNome(target: any) {
    console.log(target);
}

@exbirNome
class Funcionario {}

@exbirNome
class Padeiro{}
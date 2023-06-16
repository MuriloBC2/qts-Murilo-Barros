import{
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
    assertExists,
} from "http://deno.land/std/testing/asserts;ts"

let aluno = 'Crovis José'
let professores = ['João', 'Lais', 'Davi', 'Bruno Aparecido Cano']
let numeros = [11, 24, 69]

Deno.test('Teste de assertions (API)', () => {
    assertEquals(aluno, "Cróvis José");
    assertStringIncludes(aluno, "José");
} )

Deno.test("TEstando números", () => {
    assertArrayIncludes(numeros, [8, 33]);
})

Deno.test("Testando array do professor (API)", () => {
    assertArrayIncludes(professores,
        ["Davi", "Lais", "Alan"],
        "Opa! ALgo deu errado!");
})
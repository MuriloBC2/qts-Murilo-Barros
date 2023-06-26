import {
  assertNotEquals,
  assertAlmostEquals,
  assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts";


let teste1 = 'alou'

Deno.test("Teste não é oi", () => {
    assertNotEquals(teste1, "oi");
})

let teste2 = 2 

Deno.test("Teste de tipos", () =>{
   assertAlmostEquals(teste2, 2);
})

Deno.test("exempplo", () => {
    assertArrayIncludes([1,2], [2]);})

// código feito com marcelo henrique 
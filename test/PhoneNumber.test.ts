import { assertEquals } from "jsr:@std/assert";
import { PhoneNumber } from "../src/PhoneNumber.ts";

Deno.test("return same phone number", () => {
  const tel = new PhoneNumber("07024324234");
  assertEquals(tel.number, "07024324234");
});

const request = require("supertest");
const app = require("../../src/app");
const conn = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
      await conn.migrate.rollback();
    await conn.migrate.latest();
  });

  afterAll(async () => {
      await conn.destroy();
  });

  it("deve ser possivel criar nova ONG", async () => {
    const resp = await request(app)
      .post("/ongs")
      .send({
        name: "ADE",
        email: "l@l.com",
        whatsapp: "4500000000",
        city: "Rondon",
        uf: "UF"
      });

      expect(resp.body).toHaveProperty('id');
      expect(resp.body.id).toHaveLength(8);
  });
});

const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Gerar ID unica', () => {
    it('deve gerar uma ID unica', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});
import { expect, test } from '@playwright/test';
import { petStore } from '../apihelpers/apis';
import addNewPet from '../data/addNewPet.json';
import { updateRequestPayload } from '../apihelpers/apihelper';

test.describe.parallel('API', () => {

    // Negative test: Find and delete pet by non-existent id
    test('Find pet by id - non-existent', async ({  request }) => {
        const response = await request.delete(petStore.findById.concat('-9'));
        expect(response.status()).toBeGreaterThanOrEqual(400);
    });

    // Negative test: Find pet by id already deleted
    test('Find pet by id - invalid format', async ({ request }) => {
        const response = await request.delete(petStore.findById.concat('&&'));
        expect(response.status()).toBeGreaterThanOrEqual(400);
    });
});
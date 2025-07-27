import { expect, test } from '@playwright/test';
import { petStore } from '../apihelpers/apis';
import addNewPet from '../data/addNewPet.json';

test.describe.parallel('API', () => {
    
    test('Find pet by status - available', async ({ request }) => {
        const response = await request.get(petStore.findByStatus.concat('available'));
        expect(response.status()).toBe(200);
        const responseData = await response.json();
        expect(responseData).toBeDefined();
    });

    test('Find pet by status - pending', async ({ request }) => {
        const response = await request.get(petStore.findByStatus.concat('pending'));
        expect(response.status()).toBe(200);
        const responseData = await response.json();
        expect(responseData).toBeDefined();
    });

    test('Find pet by status - sold', async ({ request }) => {
        const response = await request.get(petStore.findByStatus.concat('sold'));
        expect(response.status()).toBe(200);
        const responseData = await response.json();
        expect(responseData).toBeDefined();
    });

     test('Find pet by id - 123', async ({ request }) => {
        const response = await request.get(petStore.findById.concat('123'));
        expect(response.status()).toBe(200);
        const responseData = await response.json();
        expect(responseData).toBeDefined();
        expect(responseData.name).toBe(addNewPet.name);
    });

    // Negative test: Find pet by non-existent id
    test('Find pet by id - non-existent', async ({ request }) => {
        const response = await request.get(petStore.findById.concat('-9'));
        expect(response.status()).toBeGreaterThanOrEqual(400);
    });

    // Negative test: Find pet by id - invalid id format
    test('Find pet by id - invalid format', async ({ request }) => {
        const response = await request.get(petStore.findById.concat('!@#$%'));
        expect(response.status()).toBeGreaterThanOrEqual(400);
    });

});
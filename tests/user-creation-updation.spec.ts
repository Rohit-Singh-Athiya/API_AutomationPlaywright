import { expect, test } from '@playwright/test';
import { petStore } from '../apihelpers/apis';
import addNewPet from '../data/addNewPet.json';
import { updateRequestPayload } from '../apihelpers/apihelper';

test.describe.serial('API', async() => {

    test('Create a new resource', async ({ request }) => {
        const response = await request.post(petStore.create, 
            { data: addNewPet } 
        );
        expect(response.status()).toBe(200);
        const responseData = await response.json();
        expect(responseData).toBeDefined();
        console.log(JSON.stringify(responseData));
    });

    test('Update resource', async ({ request }) => {
        const updatedData = updateRequestPayload(addNewPet, '123');
        const response = await request.put(petStore.create, 
            { data: updatedData } 
        );
        expect(response.status()).toBe(200);
        const responseData = await response.json();
        expect(responseData).toBeDefined();
        console.log(JSON.stringify(responseData));
    });

    // Negative test: Update non-existent resource
    test('Update non-existent resource should fail', async ({ request }) => {
        const nonExistentId = '$$%%';
        const updatedData = updateRequestPayload(addNewPet, nonExistentId);
        const response = await request.put(petStore.create, { data: updatedData });
        expect(response.status()).toBeGreaterThanOrEqual(400);
    });

    // Negative test: Create with empty payload
    test('Create resource with empty payload should fail', async ({ request }) => {
        const response = await request.post(petStore.create, { data: 0});
        expect(response.status()).toBeGreaterThanOrEqual(400);
    
    });
});
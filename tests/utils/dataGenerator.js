export function generateUserData() {
    const timestamp = Date.now();
    return {
        email: `test.user${timestamp}@example.com`,
        existingEmail: 'smartcube@mailinator.com',
        password: 'Test@1234',
        firstName: `Smart${timestamp}`,
        lastName: `Cube${timestamp}`,
    };
}

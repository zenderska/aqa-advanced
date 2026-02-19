const BASE_URL = "https://jsonplaceholder.typicode.com";

function validatePostStructure(post) {
    const expectedKeys = ["userId", "id", "title", "body"];

    expect(Object.keys(post).sort()).toEqual(expectedKeys.sort());

    expect(typeof post.userId).toBe("number");
    expect(typeof post.id).toBe("number");
    expect(typeof post.title).toBe("string");
    expect(typeof post.body).toBe("string");

    expect(post.title.length).toBeGreaterThan(0);
    expect(post.body.length).toBeGreaterThan(0);
}

function validateCommentStructure(comment) {
    const expectedKeys = ["postId", "id", "name", "email", "body"];

    expect(Object.keys(comment).sort()).toEqual(expectedKeys.sort());

    expect(typeof comment.postId).toBe("number");
    expect(typeof comment.id).toBe("number");
    expect(typeof comment.name).toBe("string");
    expect(typeof comment.email).toBe("string");
    expect(typeof comment.body).toBe("string");

    expect(comment.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}

describe("JSONPlaceholder API tests", () => {

    test("GET /posts", async () => {
        const response = await fetch(`${BASE_URL}/posts`);

        expect(response.status).toBe(200);

        expect(response.headers.get("content-type"))
            .toContain("application/json");

        const data = await response.json();

        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBe(100);

        validatePostStructure(data[0]);
    });

    test("GET /posts/1", async () => {
        const response = await fetch(`${BASE_URL}/posts/1`);

        expect(response.status).toBe(200);

        const data = await response.json();

        validatePostStructure(data);

        expect(data.id).toBe(1);
        expect(data.userId).toBeGreaterThanOrEqual(1);
        expect(data.userId).toBeLessThanOrEqual(10);
    });

    test("GET /posts/1/comments", async () => {
        const response = await fetch(`${BASE_URL}/posts/1/comments`);

        expect(response.status).toBe(200);

        const data = await response.json();

        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBeGreaterThan(0);

        validateCommentStructure(data[0]);

        data.forEach(comment => {
            expect(comment.postId).toBe(1);
        });
    });

    test("POST /posts", async () => {
        const newPost = {
            userId: 1,
            title: "Test title",
            body: "Test body"
        };

        const response = await fetch(`${BASE_URL}/posts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost)
        });

        expect(response.status).toBe(201);

        const data = await response.json();

        expect(data).toHaveProperty("id");

        expect(data.userId).toBe(newPost.userId);
        expect(data.title).toBe(newPost.title);
        expect(data.body).toBe(newPost.body);
    });

    test("GET /invalid-endpoint", async () => {
        const response = await fetch(`${BASE_URL}/invalid`);

        expect(response.status).toBe(404);
    });

});
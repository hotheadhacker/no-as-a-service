const request = require('supertest');
const { app, generateReason } = require('./index');

describe('GET /no', () => {
  it('should return a 200 OK and a valid rejection reason', async () => {
    const res = await request(app).get('/no');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('reason');
    expect(typeof res.body.reason).toBe('string');
    expect(res.body.reason.length).toBeGreaterThan(0);
  });

  it('should return a specific reason for a valid ?idx query parameter', async () => {
    const res = await request(app).get('/no?idx=0');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('reason');
    expect(typeof res.body.reason).toBe('string');
    expect(res.body.reason.length).toBeGreaterThan(0);
  });

  it('should return 404 for an out-of-bounds ?idx', async () => {
    const res = await request(app).get('/no?idx=99999');

    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty('error');
  });

  it('should return 404 for a non-numeric ?idx', async () => {
    const res = await request(app).get('/no?idx=abc');

    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty('error');
  });
});

describe('generateReason', () => {
  it('should return a valid reason from a single-element array', () => {
    const mockReasons = ["I'm telling you no."];
    const result = generateReason(mockReasons);
    expect(result).toBe(mockReasons[0]);
  });

  it('should return a reason that exists in the provided array', () => {
    const mockReasons = ["No.", "Nope.", "Absolutely not."];
    const result = generateReason(mockReasons);
    expect(mockReasons).toContain(result);
  });

  it('should return a specific reason from a supplied index', () => {
    const idx = 1;
    const mockReasons = ["No.", "Nope.", "Absolutely not."];
    const result = generateReason(mockReasons, idx);
    expect(result).toBe(mockReasons[idx]);
  });

  it('should throw an error if an invalid index is supplied', () => {
    const idx = 'abc';
    const mockReasons = ["No.", "Nope.", "Absolutely not."];
    expect(() => generateReason(mockReasons, idx)).toThrow('Reason not found');
  });

  it('should throw an error if an out-of-bounds index is supplied', () => {
    const idx = 3;
    const mockReasons = ["No.", "Nope.", "Absolutely not."];
    expect(() => generateReason(mockReasons, idx)).toThrow('Reason not found');
  });
});

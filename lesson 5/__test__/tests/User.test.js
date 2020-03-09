const request = require('supertest');
const chai = require('chai');

const server = require('../../src/server/server');

const { expect } = chai;

describe('UserComponent -> controller', () => {
    describe('GET /v1/users', () => {
        it('Get all users [GET, status code: 200]',  (done) => {
            request(server)
                .get('/v1/users/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNjRlZDJhMGI1NmM2MTA2ODhmYWUwMSIsImlhdCI6MTU4Mzc3MDk2M30.Nz1Lx0GhERlz65JAefAcZ-tAZ391Q2K_VdATuAh7_Xw')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then(({ body }) => {
                    const expectBody = expect(body);

                    expectBody.to.have.property('data').and.to.be.a('array');
                    
                    done();
                })
                .catch((err) => done(err));
        });
    });
    describe('POST /v1/users/create', () => {
        it('Create new user [POST, status code: 200]', (done) => {
            request(server)
                .post('/v1/users/create')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({email: 'NEWS8ER@gmail.com',
                       fullName: 'NEWU4S8ER@gmail.com'})
                .expect('Content-Type', /json/)
                .expect(200)
                .then(({ body }) => {
                    const expectBody = expect(body);
                    user_id = body.data._id;
                    expectBody.to.have.property('data').and.to.be.a('Object');
    
                    done();
                })
                .catch((err) => done(err));
        });
        it('!Create new user with bad data [POST, status code: 422]', (done) => {
            request(server)
                .post('/v1/users/create')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({email: 'vdjgmail.net', fullName: 'Jacson'})
                .expect('Content-Type', /json/)
                .expect(422)
                .then(({ body }) => {
                    const expectBody = expect(body);
                    expectBody.to.have.property('message');
    
                    done();
                })
                .catch((err) => done(err));
        });
    });
    describe('GET /v1/users/:id', () => {
        it('Get user with id [GET, status code: 200]', (done) => {
            request(server)
                .get(`/v1/users/${user_id}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNjRlZDJhMGI1NmM2MTA2ODhmYWUwMSIsImlhdCI6MTU4Mzc3MDk2M30.Nz1Lx0GhERlz65JAefAcZ-tAZ391Q2K_VdATuAh7_Xw`)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then(({ body }) => {
                    const expectBody = expect(body);
    
                    expectBody.to.have.property('data').and.to.be.a('Object');
    
                    done();
                })
                .catch((err) => done(err));
        });
        it('!Get user with bad id (VALIDATION) [GET, status code: 422]', (done) => {
            request(server)
                .get(`/v1/users/0?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNjRlZDJhMGI1NmM2MTA2ODhmYWUwMSIsImlhdCI6MTU4Mzc3MDk2M30.Nz1Lx0GhERlz65JAefAcZ-tAZ391Q2K_VdATuAh7_Xw`)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(422)
                .then(({ body }) => {
                    const expectBody = expect(body);
    
                    expectBody.to.have.property('error').to.have.string('E_MISSING_OR_INVALID_PARAMS');
    
                    done();
                })
                .catch((err) => done(err));
        });
        it('!Get user with wrong id [GET, status code: 200]', (done) => {
            request(server)
                .get(`/v1/users/5e5e78106435b312c0c4e458?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNjRlZDJhMGI1NmM2MTA2ODhmYWUwMSIsImlhdCI6MTU4Mzc3MDk2M30.Nz1Lx0GhERlz65JAefAcZ-tAZ391Q2K_VdATuAh7_Xw`)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then(({ body }) => {
                    const expectBody = expect(body);
    
                    expectBody.to.have.property('data').to.be.a('null');
    
                    done();
                })
                .catch((err) => done(err));
        });
    });
    describe('UPDATE /v1/users/update', () => {
        it('Update user [PUT, status code: 200]', (done) => {
            request(server)
                .put('/v1/users/update')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({id: user_id, fullName: 'NEW USER', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNjRlZDJhMGI1NmM2MTA2ODhmYWUwMSIsImlhdCI6MTU4Mzc3MDk2M30.Nz1Lx0GhERlz65JAefAcZ-tAZ391Q2K_VdATuAh7_Xw'})
                .expect('Content-Type', /json/)
                .expect(200)
                .then(({ body }) => {
                    const expectBody = expect(body);
    
                    expectBody.to.have.property('data').and.to.be.a('Object');
    
                    done();
                })
                .catch((err) => done(err));
        });
        it('!Update user with bad params (VALIDATION) [PUT, status code: 422]', (done) => {
            request(server)
                .put('/v1/users/update')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({id: '', fullName: 'NEW USER', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNjRlZDJhMGI1NmM2MTA2ODhmYWUwMSIsImlhdCI6MTU4Mzc3MDk2M30.Nz1Lx0GhERlz65JAefAcZ-tAZ391Q2K_VdATuAh7_Xw'})
                .expect('Content-Type', /json/)
                .expect(422)
                .then(({ body }) => {
                    const expectBody = expect(body);
    
                    expectBody.to.have.property('message').to.have.string('E_MISSING_OR_INVALID_PARAMS');
    
                    done();
                })
                .catch((err) => done(err));
        });
    });
    describe('DELETE /v1/users/delete', () => {
        it('Delete~ user [DEL, status code: 200]', (done) => {
            request(server)
                .del('/v1/users/delete')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({id: user_id, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNjRlZDJhMGI1NmM2MTA2ODhmYWUwMSIsImlhdCI6MTU4Mzc3MDk2M30.Nz1Lx0GhERlz65JAefAcZ-tAZ391Q2K_VdATuAh7_Xw'})
                .expect('Content-Type', /json/)
                .expect(200)
                .then(({ body }) => {
                    const expectBody = expect(body);
    
                    expectBody.to.have.property('data').and.to.be.a('Object');
    
                    done();
                })
                .catch((err) => done(err));
        });
        it('!Delete~ user with bad id (VALIDATION) [DEL, status code: 422]', (done) => {
            request(server)
                .del('/v1/users/delete')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({id: '', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNjRlZDJhMGI1NmM2MTA2ODhmYWUwMSIsImlhdCI6MTU4Mzc3MDk2M30.Nz1Lx0GhERlz65JAefAcZ-tAZ391Q2K_VdATuAh7_Xw'})
                .expect('Content-Type', /json/)
                .expect(422)
                .then(({ body }) => {
                    const expectBody = expect(body);
    
                    expectBody.to.have.property('message').to.have.string('E_MISSING_OR_INVALID_PARAMS');
    
                    done();
                })
                .catch((err) => done(err));
        });
    });
});

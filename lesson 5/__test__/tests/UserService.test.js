const chai = require('chai');
const UtilService = require('../../src/components/User/service');

const { expect } = chai;

describe('UserComponent -> service', () => {
        it('UserComponent -> service -> findAll', (done) => {
            UtilService.findAll()
                .then((body) => {
                    const expectBody = expect(body);
                    expectBody.to.be.an('array');
                    done();
                })
                .catch(done);
        });
        it('UserComponent -> service -> findById', (done) => {
            UtilService.findById('5e64ed2a0b56c610688fae01')
                .then((body) => {
                    const expectBody = expect(body);
                    expectBody.to.be.an('object');
                    done();
                })
                .catch(done);
        });
        it('UserComponent -> service -> create', (done) => {
            UtilService.create({email:'NewUser2@gmail.com', fullName: 'Astoria'})
                .then((body) => {
                    user_id = body._id;
                    const expectBody = expect(body);
                    expectBody.to.be.an('object');
                    done();
                })
                .catch(done);
        });
        it('UserComponent -> service -> updateById', (done) => {
            UtilService.updateById({_id: user_id}, {fullName: 'NewFullName'})
                .then((body) => {
                    const expectBody = expect(body);
                    //expectBody.to.be.an('object');
                    done();
                })
                .catch(done);
        });
        it('UserComponent -> service -> delete', (done) => {
            UtilService.deleteById({_id: user_id})
                .then((body) => {
                    const expectBody = expect(body);
                    expectBody.to.be.an('object');
                    done();
                })
                .catch(done);
        });
});

// SERVER
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../index')



chai.use(chaiHttp);

// Parent Block
describe('categories', () => {
    beforeEach((done) => {
        
    });
});

// Test Get All
describe('/Get All categories', () => {
    it('it should get all categories', (done) => {
        
        chai.request(server)
            .get('/api/categorie')
            .end((err, res) => {
                res.body.should.be.a('array');
                done();
            });
    });
});

//Test Get One
describe('/Get categorie by Id', () => {
    it('it should get a categorie by id', (done) => {
        
        chai.request(server)
            .get('/api/categorie/1')
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('id');
                res.body.should.have.property('name')
               

                done();
            });
    });

    it('it should return null', (done) => {
        
        chai.request(server)
            .get('/api/categorie/-1')
            .end((err, res) => {
                should.equal(res.body, null);

                done();
            });
    });

    it('it should return null', (done) => {
        
        chai.request(server)
            .get('/api/categorie/abcdef')
            .end((err, res) => {
                should.equal(res.body, null);

                done();
            });
    });
});

//Test Post
describe('/Post categorie', () => {
    it('it should return a categorie', (done) => {
        
        let categorie = {
            name: "name",
           
        };

        chai.request(server)
            .post('/api/categorie')
            .send(categorie)
            .end((err, res) => {
                
                res.body.should.be.a('object');
                res.body.should.have.property('id');
                res.body.should.have.property('name').eql('name');

                done();
            });

    });




    it('it should return msg', (done) => {

        let categorie = {
            
            
        };

        chai.request(server)
            .post('/api/categorie')
            .send(categorie)
            .end((err, res) => {
                
                res.text.should.be.eql('Request must contain name fields.');

                done();
            });
    });


});


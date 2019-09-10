// SERVER
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../index')



chai.use(chaiHttp);

// Parent Block
describe('Questions', () => {
    beforeEach((done) => {
        
    });
});

// Test Get All
describe('/Get All Questions', () => {
    it('it should get all questions', (done) => {
        
        chai.request(server)
            .get('/api/question')
            .end((err, res) => {
                res.body.should.be.a('array');
                done();
            });
    });
});

//Test Get One
describe('/Get Question by Id', () => {
    it('it should get a question by id', (done) => {
        
        chai.request(server)
            .get('/api/question/1')
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('id');
                res.body.should.have.property('question');
                res.body.should.have.property('reponse1');
                res.body.should.have.property('reponse2');
                res.body.should.have.property('reponse3');
                res.body.should.have.property('reponse4');
                res.body.should.have.property('bonneReponse');

                done();
            });
    });

    it('it should return null', (done) => {
        
        chai.request(server)
            .get('/api/question/-1')
            .end((err, res) => {
                should.equal(res.body, null);

                done();
            });
    });

    it('it should return null', (done) => {
        
        chai.request(server)
            .get('/api/question/abcdef')
            .end((err, res) => {
                should.equal(res.body, null);

                done();
            });
    });
});

//Test Post
describe('/Post question', () => {
    it('it should return a question', (done) => {
        
        let question = {
            question: "question",
            reponse1: "reponse1",
            reponse2: "reponse2",
            reponse3: "reponse3",
            reponse4: "reponse4",
            bonneReponse: 1
        };

        chai.request(server)
            .post('/api/question')
            .send(question)
            .end((err, res) => {
                
                res.body.should.be.a('object');
                res.body.should.have.property('id');
                res.body.should.have.property('question').eql('question');
                res.body.should.have.property('reponse1').eql('reponse1');
                res.body.should.have.property('reponse2').eql('reponse2');
                res.body.should.have.property('reponse3').eql('reponse3');
                res.body.should.have.property('reponse4').eql('reponse4');
                res.body.should.have.property('bonneReponse').eql(1);

                done();
            });

    });


    it('it should return msg', (done) => {

        let question = {
            
            reponse1: "reponse1",
            reponse2: "reponse2",
            reponse3: "reponse3",
            reponse4: "reponse4",
            bonneReponse: 1
        };

        chai.request(server)
            .post('/api/question')
            .send(question)
            .end((err, res) => {
                
                res.text.should.be.eql('Request must contain question, reponse1, reponse2, reponse3, reponse4 and bonneReponse fields.');

                done();
            });
    });

    it('it should return msg', (done) => {

        let question = {
            
            question: "question",
            reponse2: "reponse2",
            reponse3: "reponse3",
            reponse4: "reponse4",
            bonneReponse: 1
        };

        chai.request(server)
            .post('/api/question')
            .send(question)
            .end((err, res) => {
                
                res.text.should.be.eql('Request must contain question, reponse1, reponse2, reponse3, reponse4 and bonneReponse fields.');

                done();
            });
    });

    it('it should return msg', (done) => {

        let question = {
            
            reponse1: "reponse1",
            question: "reponse2",
            reponse3: "reponse3",
            reponse4: "reponse4",
            bonneReponse: 1
        };

        chai.request(server)
            .post('/api/question')
            .send(question)
            .end((err, res) => {
                
                res.text.should.be.eql('Request must contain question, reponse1, reponse2, reponse3, reponse4 and bonneReponse fields.');

                done();
            });
    });

    it('it should return msg', (done) => {

        let question = {
            
            reponse1: "reponse1",
            reponse2: "reponse2",
            question: "reponse3",
            reponse4: "reponse4",
            bonneReponse: 1
        };

        chai.request(server)
            .post('/api/question')
            .send(question)
            .end((err, res) => {
                
                res.text.should.be.eql('Request must contain question, reponse1, reponse2, reponse3, reponse4 and bonneReponse fields.');

                done();
            });
    });

    it('it should return msg', (done) => {

        let question = {
            
            reponse1: "reponse1",
            reponse2: "reponse2",
            reponse3: "reponse3",
            question: "reponse4",
            bonneReponse: 1
        };

        chai.request(server)
            .post('/api/question')
            .send(question)
            .end((err, res) => {
                
                res.text.should.be.eql('Request must contain question, reponse1, reponse2, reponse3, reponse4 and bonneReponse fields.');

                done();
            });
    });

    it('it should return msg', (done) => {

        let question = {
            
            reponse1: "reponse1",
            reponse2: "reponse2",
            reponse3: "reponse3",
            reponse4: "reponse4",
            question: 1
        };

        chai.request(server)
            .post('/api/question')
            .send(question)
            .end((err, res) => {
                
                res.text.should.be.eql('Request must contain question, reponse1, reponse2, reponse3, reponse4 and bonneReponse fields.');

                done();
            });
    });

    it('it should return msg', (done) => {

        let question = {
            
            
        };

        chai.request(server)
            .post('/api/question')
            .send(question)
            .end((err, res) => {
                
                res.text.should.be.eql('Request must contain question, reponse1, reponse2, reponse3, reponse4 and bonneReponse fields.');

                done();
            });
    });


});


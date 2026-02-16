const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Animales API', () => {
  it('Debería obtener todos los animales en /api', (done) => {
    chai.request(app)
      .get('/api')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        // Cambiamos el valor a 4 porque ahora hay 4 animales (cow, pig, duck, gato)
        expect(res.body.length).to.equal(4); 
        done();
      });
  });

  it('Debería responder con HTML en /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        done();
      });
  });
});

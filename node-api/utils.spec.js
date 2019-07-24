const utils = require('./utils');
//검증 모듈
//const assert = require('assert');

const should = require('should');
//테스트 코드
describe('utils.js모듈의 capitalize() 함수는',()=>{
    it('문자열의 첫번째 문자를 대문자로 변환한다',()=>{
        // ...
        const result = utils.capitialize('hello');
        result.should.be.equal('Hello');
    })
})
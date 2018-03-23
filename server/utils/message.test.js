var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage',()=>{
    it('should generate correct message object', (done)=>{
        var from = 'Luis';
        var text = 'Hola';
        var message = generateMessage(from, text);
        expect(message.from).toBeTruthy();
        expect(message.text).toBeTruthy();
        expect(message).toInclude({from, text});
        expect(typeof res.createdAt).toBe('number');
        done();
    });
});


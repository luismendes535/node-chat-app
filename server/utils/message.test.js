var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
    it('should generate correct message object', (done)=>{
        var from = 'Luis';
        var text = 'Hola';
        var message = generateMessage(from, text);
        expect(message.from).toBeTruthy();
        expect(message.text).toBeTruthy();
        expect(message).toMatchObject({from, text});
        expect(typeof message.createdAt).toBe('number');
        done();
    });
});

describe('generateLocationMessage',()=>{
    it('should generate correct location object',(done)=>{
        var from='Luis',
            latitude=1,
            longitude=1,
            url="https://www.google.com/maps?q=1,1";
        var message = generateLocationMessage(from, latitude, longitude);
        expect(typeof message.createdAt).toBe('number')
        expect(message).toMatchObject({from, url})
        done();
    })
})

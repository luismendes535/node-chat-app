const expect = require('expect');
var {isRealString} = require('./validation');

describe('is real string',()=>{
    it('should reject non-string values',()=>{
        var result = isRealString(12345);
        expect(result).toBe(false);
    });
    it('should reject string with only spaces',()=>{
        var result = isRealString('        ');
        expect(result).toBe(false);
    });
    it('should allow string with non-spaces charecteres',()=>{
        var result = isRealString('     kjbbkvhv');
        expect(result).toBe(true);
    });
});
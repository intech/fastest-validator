/// <reference path="../../../index.d.ts" /> // here we make a reference to exists module definition
import ValidatorType from 'fastest-validator'; // here we importing type definition of default export

const Validator: typeof ValidatorType = require('../../../index'); // here we importing real Validator Constructor
const v: ValidatorType = new Validator();

describe('TypeScript Definitions', () => {
    describe('Test rule: equal', () => {

        it('should value equals to other field', () => {
            const check = v.compile({ confirm: { type: 'equal', field: 'pass' } });
            const message = 'The \'confirm\' field value must be equal to \'pass\' field value.';

            expect(check({ confirm: 'abcd' })).toEqual([{ type: 'equalField', field: 'confirm', actual: 'abcd', expected: 'pass', message }]);
            expect(check({ pass: '1234', confirm: 'abcd' })).toEqual([{ type: 'equalField', field: 'confirm', actual: 'abcd', expected: 'pass', message }]);
            expect(check({ pass: '1234', confirm: 1234 })).toEqual(true);
            expect(check({ pass: '1234', confirm: '1234' })).toEqual(true);
        });

        it('should value strict equals to other field', () => {
            const check = v.compile({ confirm: { type: 'equal', field: 'pass', strict: true } });
            const message = 'The \'confirm\' field value must be equal to \'pass\' field value.';

            expect(check({ confirm: 'abcd' })).toEqual([{ type: 'equalField', field: 'confirm', actual: 'abcd', expected: 'pass', message }]);
            expect(check({ pass: '1234', confirm: 'abcd' })).toEqual([{ type: 'equalField', field: 'confirm', actual: 'abcd', expected: 'pass', message }]);
            expect(check({ pass: '1234', confirm: 1234 })).toEqual([{ type: 'equalField', field: 'confirm', actual: 1234, expected: 'pass', message }]);
            expect(check({ pass: '1234', confirm: '1234' })).toEqual(true);
        });

        it('should value equals to a static value', () => {
            const check = v.compile({ accept: { type: 'equal', value: true } });
            const message = 'The \'accept\' field value must be equal to \'true\'.';

            expect(check({ accept: 'abcd' })).toEqual([{ type: 'equalValue', field: 'accept', actual: 'abcd', expected: true, message }]);
            expect(check({ accept: 100 })).toEqual([{ type: 'equalValue', field: 'accept', actual: 100, expected: true, message }]);
            expect(check({ accept: 'true' })).toEqual([{ type: 'equalValue', field: 'accept', actual: 'true', expected: true, message }]);
            expect(check({ accept: false })).toEqual([{ type: 'equalValue', field: 'accept', actual: false, expected: true, message }]);
            expect(check({ accept: 1 })).toEqual(true);
            expect(check({ accept: true })).toEqual(true);
        });

        it('should value strict equals to a static value', () => {
            const check = v.compile({ accept: { type: 'equal', value: true, strict: true } });
            const message = 'The \'accept\' field value must be equal to \'true\'.';

            expect(check({ accept: 'abcd' })).toEqual([{ type: 'equalValue', field: 'accept', actual: 'abcd', expected: true, message }]);
            expect(check({ accept: 100 })).toEqual([{ type: 'equalValue', field: 'accept', actual: 100, expected: true, message }]);
            expect(check({ accept: 'true' })).toEqual([{ type: 'equalValue', field: 'accept', actual: 'true', expected: true, message }]);
            expect(check({ accept: false })).toEqual([{ type: 'equalValue', field: 'accept', actual: false, expected: true, message }]);
            expect(check({ accept: 1 })).toEqual([{ type: 'equalValue', field: 'accept', actual: 1, expected: true, message }]);
            expect(check({ accept: true })).toEqual(true);
        });
    });
});

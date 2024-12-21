import { CalculatorService } from "./calculator.service";
import { TestBed } from '@angular/core/testing';
import { LoggerService } from "./logger.service";


describe('CalculatorService', () => {

    let calculator: CalculatorService;
    let loggerSpy: any


    beforeEach(() => {

        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                {
                    provide: LoggerService,
                    use: loggerSpy
                }
            ]
        });
        calculator = TestBed.inject(CalculatorService);

    });

    it('should add two numbers', () => {
        const result = calculator.add(2, 2);
        expect(result).toBe(4);
        // expect(loggerSpy.log).toHaveBeenCalled();

    });

    it('should substract two numbers', () => {
        pending();
    });
});
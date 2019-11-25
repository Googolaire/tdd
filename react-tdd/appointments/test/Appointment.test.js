import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment'
let container;
let customer;
beforeEach(() => {
    container = document.createElement('div')
});
const render = component => ReactDOM.render(component, container);
describe('Appointment', () => {
    it('renders the customer first name', () => {
        let customer = {firstName: 'Hunter'};
        const component = <Appointment customer={customer} />;

        render(<Appointment customer={customer} />);

        expect(container.textContent).toMatch('Hunter')
    });
});

describe('Appointment', () => {
    it('renders the customer first name', () => {
        let customer = {firstName: 'John'};
        const component = <Appointment customer={customer} />;

        render(<Appointment customer={customer} />);
        
        expect(container.textContent).toMatch('John')
    });
});
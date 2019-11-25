# tdd


## Nov 24th 2019
react-tdd
@googolaire	


### Game Plan 

Today, I will read the TDD book some more and follow along. We are doing things like  testing to see the dom renders elements with specific classNames. 


### Issues I had



1. There was an issue with git, it had another repo cached or something.
    1. (solved) Created new repo
2.  Unknown plugin "@babel/transform-runtime"
    2. (solved) In the babelrc file `["@babel/plugin-transform-runtime"] is the correct way to call it.`
3. Babel 6.26.3 is being used it needs 7. 
    3. (solved) Deleted my package.json file and redid it all
*   Mid session links

        [https://www.one-tab.com/page/gK13H6sKRs-zBAoBREgPnA](https://www.one-tab.com/page/gK13H6sKRs-zBAoBREgPnA)

*   End of session links


### End of session Brief

Things I did included creating a react app from scratch rather than using a boilerplate. Creating a failing test to see how that goes. And creating an expectation for a real test. Empty test that have an expectation always pass. Ie 


```
describe('Appointment', () => {
    it('renders the customer first name', ()=>{


    });
});
```


 It refers to the first argument of the describe

Somethings I took away was not to put test in the same folder with production files. Its not the unit testing way. We created a test folder. But CRA (Create React App) add one for the app.js file in the same Dir. This is not right and should be avoided. Unit test should be independent of one another. 


##### Assets

Dir created TDD/react-tdd/appointments

Appointments\package.json

Appointments\test

Appointments\test\Appointment.test.js

Appointments\.babelrc
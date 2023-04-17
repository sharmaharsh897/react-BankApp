// import React from "react";
// import { render,fireEvent } from "@testing-library/react";
// import {Register} from "./Register";

// // describe('Register form', () => {
// //      it("should show error messages when all form inputs are empty", ()=>{
// //         const{getByLabelText, getByText}=render(<Register/>);
        
// //         //find form elements
// //         const usernameInput= getByLabelText("Full name:");
// //         const emailInput= getByLabelText("Email:");
// //         const passwordInput= getByLabelText("Enter password:");
// //         const confirmPasswordInput= getByLabelText("Re-enter password:");
    
// //         //fill form with empty inputs
// //         fireEvent.change(usernameInput,{target:{value:""}});
// //         fireEvent.change(emailInput,{target:{value:""}});
// //         fireEvent.change(passwordInput,{target:{value:""}});
// //         fireEvent.change(confirmPasswordInput,{target:{value:""}});

// //         //submit form
// //         fireEvent.submit(getByText("Create Account"));

// //         //assert error messages
// //         expect(getByText("Enter valid full name:")).toBeInTheDocument();
// //         expect(getByText("Enter valid email address:")).toBeInTheDocument();
// //         expect(getByText("Password is required")).toBeInTheDocument();
// //         expect(getByText("Please confirm your password")).toBeInTheDocument();
        
// //     }); 
// // });

// jest.mock("axios");
// describe("Register", ()=>{
//     beforeEach(()=>{
//         render(<Register/>);
//     });

//     test("renders the form",() =>{
//         const form=screen.getByRole("form");
//         expect(form).toBeInTheDocument();
//     });

//     test("Shows error message when the form is submitted with invalid inputs", ()=>{
//         const submitBotton= screen.getByRole("button",{name:"Register"});
//         fireEvent.click(submitBotton);

//         const usernameError= screen.getByText(/Enter valid full name/i);
//         expect(usernameError).toBeInTheDocument();

//         const emailError= screen.getByText(/Enter valid email address/i);
//         expect(emailError).toBeInTheDocument();

//         const passwordError= screen.getByText(/Password should not be empty/i);
//         expect(passwordError).toBeInTheDocument();

//     });

//     test("submits the form when all inputs are valid", async()=>{
//         const usernameInput=screen.getByLabelText(/Full name/i);
//         const emailInput=screen.getByLabelText(/Full name/i);
//         const passwordInput=screen.getByLabelText(/Full name/i);
//         const confirmPasswordInput=screen.getByLabelText(/Full name/i);
//         const submitButton=screen.getByRole("button",{name:"Register"});
        
//         fireEvent.change(usernameInput,{target:{value:"Test User"} });
//         fireEvent.change(emailInput,{target:{value:"test@example.com"} });
//         fireEvent.change(passwordInput,{target:{value:"Test123!"} });
//         fireEvent.change(confirmPasswordInput,{target:{value:"Test123!"} });
//         fireEvent.click(submitButton);

        
//     });
// });
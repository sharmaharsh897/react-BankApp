// import React from "react";
// import { render,fireEvent } from "@testing-library/react";
// import {Register} from "./Register";

// describe('Register form', () => {
//      it("should show error messages when all form inputs are empty", ()=>{
//         const{getByLabelText, getByText}=render(<Register/>);
        
//         //find form elements
//         const usernameInput= getByLabelText("Full name:");
//         const emailInput= getByLabelText("Email:");
//         const passwordInput= getByLabelText("Enter password:");
//         const confirmPasswordInput= getByLabelText("Re-enter password:");
    
//         //fill form with empty inputs
//         fireEvent.change(usernameInput,{target:{value:""}});
//         fireEvent.change(emailInput,{target:{value:""}});
//         fireEvent.change(passwordInput,{target:{value:""}});
//         fireEvent.change(confirmPasswordInput,{target:{value:""}});

//         //submit form
//         fireEvent.submit(getByText("Create Account"));

//         //assert error messages
//         expect(getByText("Enter valid full name:")).toBeInTheDocument();
//         expect(getByText("Enter valid email address:")).toBeInTheDocument();
//         expect(getByText("Password is required")).toBeInTheDocument();
//         expect(getByText("Please confirm your password")).toBeInTheDocument();
        
//     }); 
// });
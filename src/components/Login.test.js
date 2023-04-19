import React from "react";
import {render,screen,fireEvent } from '@testing-library/react';
import { Login } from "./Login";

describe("Login component",()=>{
    //Test that the email input field exists and is empty on load.
    it('rendors Login component without errors', () => {
        render(<Login/>);
        expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
        expect(screen.getByLabelText("Enter password")).toBeInTheDocument();
        expect(screen.getByText("Forgot your password?")).toBeInTheDocument();
        expect(screen.getByText("Need an account?")).toBeInTheDocument();
     });
    it("shows and hides the password", ()=>{
        render(<Login/>);
        const passwordInput=screen.getByLabelText("Enter password");
        const passwordToggle= screen.getByTestId("password-toggle");

        //Password should be hidden by default
        expect(passwordInput).toHaveAttribute("type","password");

        //Click toggle button to show password
        fireEvent.click(passwordToggle);
        expect(passwordInput).toHaveAttribute("type","text");

        //click toggle buttom again to hide password
        fireEvent.click(passwordToggle);
        expect(passwordInput).toHaveAttribute("type","password");
    });
    
    it("validates the form on submit", ()=>{
        render(<Login/>);
        const emailInput=screen.getByLabelText("E-mail");
        const passwordInput=screen.getByLabelText("Enter Password");
        const submitPassword=screen.getByText("Log In");

        //Try to submit without filling in any fields
        fireEvent.click(submitButton);
        expect(screen.getByText("Email is required")).toBeInTheDocument();
        expect(screen.getByText("Password is required")).toBeInTheDocument();

        //Fill in the email and password with invalid password
        fireEvent.change(emailInput,{target:{value:"test@example.com"}});
        fireEvent.change(passwordInput,{target:{value:"123"}});

        //Submit again and check for validation errors
        expect(screen.queryByText("Email is required")).not.toBeInTheDocument();
        expect(screen.getByText("password must be of more than 4 characters")).toBeInTheDocument();
    });
});
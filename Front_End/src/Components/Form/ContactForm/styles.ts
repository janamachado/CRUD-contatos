import styled from "styled-components";

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 350px;
    height: 550px;
    margin: auto;
    margin-top: 50px;
    border-radius: 25px;
    padding: 30px 5px;

    background-color: #00472E;
    color: #F8F9FA;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    width: 70%;  
    
    label{
        display: flex;
        justify-content: flex-start;
        font-size: 10px;
        margin: 7px 0;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 17px;
    }

    input{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        width: 215px;
        height: 33px;
        
        padding: 5px 15px;
        border-style: none;
        border-radius: 4px;
        font-size: 14px;
        
        color: lightgray;
    }
`

export const ContainerFormContact = styled.div`

    .div_titleContact{
        display: flex;
        flex-direction: column;
        font-size: 18px;
        font-weight: 400;
    }
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 950px;
    height: 190px;
    margin: auto;
    border-radius: 25px;

    background-color: #00472E;
    color: #F8F9FA;
`

export const FormContact = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 28px;
    
    label{
        display: flex;
        justify-content: flex-start;
        font-size: 10px;
        margin: -32px -45px 65px 0;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 17px;
        display: flex;
        flex-direction: column;

    }

    .div_label{
        display: flex;
        flex-direction: row;
        width: 254px;
        margin-left: 10px;
        margin-right: 10px;
        justify-content: center;
    }

    input{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 33px;
        
        padding: 5px 15px;
        border-style: none;
        border-radius: 4px;
        font-size: 14px;
        
        color: lightgray;
    }

    .div_button{
        display: flex;
        flex-direction: column;
    }
`
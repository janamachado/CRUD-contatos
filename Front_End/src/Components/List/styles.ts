import styled from "styled-components"

export const Container = styled.div`
    header{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        width: 100%;
        height: 100px;
        border-bottom: 1px solid gray;
        box-shadow: -8px -2px 20px 0px;
        margin-bottom: 70px;

        font-weight: 700;
    }

    .title_paragraph{
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 30px;
    }
`

export const ContainerList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 215px;
    flex-wrap: wrap;
    height: 600px;
`

export const List = styled.li`
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 500px;
    height: 80px;
    background-color: #D5FFE0;
    border-radius: 20px;
    margin: 10px 10px;
    padding: 10px 5px;

    .div_li{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    button{
        background-color: transparent;
        border: none;
        cursor: pointer;

        :hover{
            color: blue;
        }
    }
`
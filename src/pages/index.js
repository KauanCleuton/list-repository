import styled from "styled-components";

const Container = styled.main`
    max-width: 20rem;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 10px;
    font-family: 'Roboto', sans-serif;
    color: #131313;

    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 12px -8px #131312;
    > input {
        max-width: 100%;
        font-size: 17px;
        border: none;
        padding: 8px 20px;
        box-shadow: 0 0 12px -8px #131312;
        outline: 1px solid orange;
        border-radius: 10px;
        color: orange;
        margin-bottom: 18px;
    }
    > button {
        box-shadow: 0 0 12px -8px #131312;
        padding: 8px 37px;
        color: #313131;
        background-color: #ffa703;
        font-weight: 600;
        font-size: 16px;
        transition: .3s ease-in-out;
        border: none;
        border-radius: 10px;
    }
    button:hover {
        background-color: #ffa600d9;
    }
    > ul {
        width: 100%;
        max-height: 200px;
        overflow-y: auto;
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        align-items: center;
        justify-items: center;
        

        li {
            width: 100%;
            text-align: center;
            background-color: orange;
            padding: 12px 29px;
            display: flex;
            align-items: center;
            margin-right: 30px;
            border-radius: 8px;
            transition: .3s ease-in-out;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

        a {
            text-decoration: none;
            color: #131312;
            font-size: 18px;
            font-weight: 600;
        }
        }
        li:hover {
            background-color: #ffa600d9;
        }
  }

`
export { Container }
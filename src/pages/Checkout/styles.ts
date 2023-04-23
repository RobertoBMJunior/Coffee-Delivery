import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const CheckoutContainer = styled.form`
    display: flex;
    gap: 2rem;
    align-items: start;

    margin-top: 2.5rem;

    section{
        width: 100%;
        /* flex: 1; */
    }

    section>h2{
        margin-bottom: 1rem;
    }

    /* section:nth-child(1){

    } */

    @media only screen and (max-width: 1216px) {
        flex-direction: column;
    }

    @media only screen and (max-width: 340px) {
        .address, .payment{
            flex-direction: column;
        }
    }



`
export const DeliveryAddressContainer = styled.section`
    padding: 2.5rem;

    margin-bottom: 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    background-color: ${props => props.theme["gray-100"]};

    input{
        padding: 0.75rem;

        background-color: ${props => props.theme["gray-300"]};
        border: 0;
        border-radius: 8px;

        border: 1px solid transparent;

        &:focus{
            border: 1px solid ${props => props.theme["yellow-dark"]};
        }
    }

    .inputtype1{
        width: 170px;
    }

    .boxInputs{
        display: flex;
        gap: 0.75rem;

        input:nth-child(1){
            width: 100px;
        }

        input:nth-child(2){
            flex: 3;
        }

    }

    .boxInputs2{
        display: flex;
        gap: 0.75rem;

        input:nth-child(1){
            width: 70%;
        }

    }

    .boxInputs3{
        width: 100%;

        display: flex;
        gap: 0.75rem;

        input:nth-child(1){
            flex: 1;
        }

        input:nth-child(2){
            width: 60px;
        }
    }

    .address{
        display: flex;
        gap: 0.5rem;
        align-items: start;

        margin-bottom: 1rem;

        svg{
            color: ${props => props.theme["yellow-dark"]};
        }

        h3{
            color: ${props => props.theme["gray-700"]};

            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 1216px) {
        .inputtype1{
            width: 50%;
        }
    }

    @media only screen and (max-width: 590px) {
        .inputtype1{
            width: 100%;
        }

        .boxInputs2{
            flex-direction: column;

            input:nth-child(1){
                width: 100%;
            }

            input{
                width:100%
            }
        }
    }

    @media only screen and (max-width: 590px) {
        padding: 2.5rem 1rem;
    }

    @media only screen and (max-width: 480px) {
        .inputtype1{
            width: 100%;
        }

        .boxInputs{
            flex-direction: column;

            input:nth-child(1){
                width: 100%;
            }
        }

        .boxInputs2{
            flex-direction: column;

            input:nth-child(1){
                width: 100%;
            }

            input{
                width:100%
            }
        }
    }
`

export const PaymentContainer = styled.section`
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    background-color: ${props => props.theme["gray-100"]};

    .payment{
        display: flex;
        gap: 0.5rem;
        align-items: start;

        margin-bottom: 1rem;

        svg{
            color: ${props => props.theme["purple"]};
        }

        h3{
            color: ${props => props.theme["gray-700"]};

            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 590px) {
        padding: 2.5rem 1rem;
    }
`

export const PaymentType = styled(RadioGroup.Root)`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    flex-wrap: wrap;

`

export const PaymentOptions = styled(RadioGroup.Item)`
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    border: 0;
    border-radius: 8px;
    background-color: ${props => props.theme["gray-300"]};

    font-size: 0.75rem;
    line-height: 160%;

    flex-grow: 1;

    cursor: pointer;

    svg{
        color: ${props => props.theme["purple"]};
    }

    &:hover{
        background-color: ${props => props.theme["gray-400"]};
    }

    &[data-state="checked"] {
        background-color: ${props => props.theme["purple-light"]};
        border: 1px solid ${props => props.theme["purple"]};
    }

`

export const CartContainer = styled.section`
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    background-color: ${props => props.theme["gray-100"]};

    .emptyCart{
        text-align: center;

        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 1.5rem;

        padding-bottom: 1rem;

        border-bottom: 1px solid ${props => props.theme["gray-300"]};
    }

    .total{
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        &>div{
            display: flex;
            justify-content: space-between;
            align-items: center;

            span:nth-child(2){
                font-size: 1rem;
            }
        }

        div:last-child{
            font-weight: 700;
            font-size: 1.25rem;
        }
    }

    .confirmOrder{
        text-decoration: none;

        width: 100%;

        font-weight: 700;
        line-height: 160%;

        color: ${props=> props.theme["white-1"]};
        background-color: ${props => props.theme.yellow};

        border: 0;
        border-radius: 6px;

        padding: 12px 8px;

        text-transform: uppercase;
        text-align: center;

        cursor: pointer;

        transition: background-color 0.2s;

        a{
            width: 100%;
            text-decoration: none;
            color: ${props=> props.theme["white-1"]};
        }

        &:hover{
            background-color: ${props => props.theme["yellow-dark"]};
            transition: background-color 0.2s;
        }

        &:disabled{
            cursor: not-allowed;
        }
    }

    @media only screen and (max-width: 590px) {
        padding: 2.5rem 1rem;
    }
`
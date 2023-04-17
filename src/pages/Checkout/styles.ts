import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const CheckoutContainer = styled.main`
    display: flex;
    gap: 2rem;
    align-items: start;

    margin-top: 2.5rem;

    section{
        flex: 1;
    }

    section>h2{
            margin-bottom: 1rem;
    }


`
export const DeliveryAddressContainer = styled.form`
    padding: 2.5rem;

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
        width: 200px;
    }

    .boxInputs{
        display: flex;
        gap: 0.75rem;

        input:nth-child(2){
            flex: 1;
        }

        input:nth-child(3){
            flex: 2;
        }

    }

    .boxInputs2{
        display: flex;
        gap: 0.75rem;

        input:nth-child(2){
            flex: 1;
        }

        input:nth-child(3){
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
`

export const PaymentContainer = styled.section`
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

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

`

export const PaymentType = styled(RadioGroup.Root)`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

export const PaymentOptions = styled(RadioGroup.Item)`
    padding: 1rem;

    display: flex;
    align-items: center;
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

    &>button{
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

        &:hover{
            background-color: ${props => props.theme["yellow-dark"]};
            transition: background-color 0.2s;
        }
    }
`
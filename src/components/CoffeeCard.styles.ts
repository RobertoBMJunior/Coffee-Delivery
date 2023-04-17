import styled from "styled-components";

export const CoffeeContainer = styled.div`
    width: 16rem;
    height: 19.375rem;

    background-color: ${props => props.theme["gray-100"]};

    display: flex;
    flex-direction: column;
    align-items: center;
    

    .imgCoffee{
        margin-top: -20px;
    }

    .informations{
        margin: 0.75rem 0 1rem;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        
        .information{
            padding: 0.25rem 0.5rem;
    
            border-radius: 8px;
    
            background-color: ${props => props.theme["yellow-light"]};
            color: ${props => props.theme["yellow-dark"]};
    
            font-weight: 700;
            font-size: 0.75rem;
        }
    }


    .coffeeName{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 1.25rem;
        color: ${props => props.theme["gray-700"]};

        margin-bottom: 0.5rem;
    }

    .description{
        margin: 0 1.25rem 2rem;
        text-align: center;
        color: ${props => props.theme["gray-500"]};
    }

    .price{
        margin: 0 1.5rem 1.25rem;

        display: flex;
        align-items: center;

        form{
            display: flex;
            align-items: center;
        }

        input{
            width: 4.5rem;
            background-color: ${props => props.theme["gray-300"]};
            border: 0;
            border-radius: 4px;

            padding: 8px 20px;

            margin-right: 0.5rem;

            color: ${props => props.theme["gray-800"]};
            font-size: 1rem;

            &::placeholder{
                color: ${props => props.theme["gray-800"]};
                font-size: 1rem;
            }
        }

        span:nth-child(2){
            font-family: 'Baloo 2';
            font-style: normal;
            font-weight: 800;
            font-size: 1.5rem;
        
            margin: 0 1rem 0 0.2rem;
        }

        .cart{
            padding: 10px;
            border: 0;
            border-radius: 6px;
            
            height: 38px;
            
            background-color: ${props => props.theme["purple-dark"]};

            cursor: pointer;

            svg{
            color: ${props => props.theme["white-1"]};
            }

            &:hover{
                background-color: ${props => props.theme["purple"]};
            }
        }
    }
`
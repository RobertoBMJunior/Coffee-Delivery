import styled from "styled-components"

export const ChosenCoffeeContainer = styled.div`
    background-color: transparent;

    padding: 0.5rem 0.5rem 2rem;

    display: flex;
    justify-content: space-between;
    gap: 1.25rem;

    border-bottom: 1px solid ${props => props.theme["gray-300"]};

    .container{
        display: flex;
        align-items: center;
        gap: 1.25rem;

        img{
            width: 64px;
        }
    
        .name_and_qtd{
    
            /* margin-left: -90px; */
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
    
            h2{
                font-size: 1rem;
                color: ${props => props.theme["gray-700"]}
            }
    
            .qtd{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                
                .quantity{
                    width: 6.25rem;
                    background-color: ${props => props.theme["gray-300"]};
                    border: 0;
                    border-radius: 4px;
        
                    padding: 8px 16px;
        
                    color: ${props => props.theme["gray-800"]};
                    font-size: 1rem;
    
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
        
                    &::placeholder{
                        color: ${props => props.theme["gray-800"]};
                        font-size: 1rem;
                    }
    
                    svg{
                        cursor: pointer;
                    }

                    svg:hover{
                        scale: 1.1;
                        color: ${props => props.theme["purple-dark"]};
                    }
                }
    
    
                button{
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
    
                    font-size: 0.75rem;
                    line-height: 1.6;
    
                    padding: 0.5rem;
    
                    border: 0;
                    border-radius: 8px;
                    background-color: ${props => props.theme["gray-300"]};
    
                    cursor: pointer;
    
                    &:hover{
                        color: ${props => props.theme["gray-700"]};
                        background-color: ${props => props.theme["gray-400"]};
                    }
    
                }
    
                svg{
                        color: ${props => props.theme["purple"]};
                }
            }
    
        }

    }

    &>div:nth-child(2){
        /* margin-left: 1.875rem; */

        font-weight: 700;
        font-size: 1rem;
    }

    @media only screen and (max-width: 550px) {
        &{
            flex-direction: column;
            
            div:nth-child(2){
                text-align: center;
            }   
        }


        .container{
            justify-content: space-between;

            img{
                width: 100px;
            }

            /* .name_and_qtd{
                width: 100%;
                flex: 1;
            } */
        }

        .qtd{
            width: 100%;
            flex-direction: column;
            
            button{
                justify-content: center;
                width: 100px;
            }
        }
    }

    @media only screen and (max-width: 350px) {
        .container img {
            width: 80px;
        }
    }
`